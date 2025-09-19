#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>

// -------- CONFIG WIFI --------
const char* ssid = "IMPLANTAR_MARIA CLARA";
const char* password = "999711712";
String serverURL = "https://sm-api.lightning.tec.br/Sensores/enviar-leitura";


// -------- CONFIG SENSORES --------
#define DHTPIN 23
#define DHTTYPE DHT22
#define TRIG_PIN 18
#define ECHO_PIN 19
#define PLUVI_PIN 4

const int SENSORID_DHT_TEMP = 1;
const int SENSORID_DHT_UMID = 2;
const int SENSORID_ULTRA = 3;
const int SENSORID_PLUVI = 4;

// -------- VARIÁVEIS DHT --------
DHT dht(DHTPIN, DHTTYPE);

// -------- VARIÁVEIS PLUVIÔMETRO --------
volatile unsigned int pluviCount = 0;
unsigned int lastPluviCount = 0;
unsigned long lastPluviTime = 0;
bool pluviActive = false;

unsigned long previousMillisDHT = 0;
unsigned long previousMillisUltra = 0;
unsigned long intervalLeitura = 7000; // 7 segundos para cada

// --- FUNÇÃO INTERRUPÇÃO PLUVIÔMETRO ---
void IRAM_ATTR pluviInterruption() {
  unsigned long now = millis();
  if (now - lastPluviTime > 300) { 
    pluviCount++;
    lastPluviTime = now;
    pluviActive = true;
  }
}

// --- FUNÇÃO LEITURA ULTRASSÔNICO ---
float readUltrasonic() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH, 30000);
  if (duration == 0) return -1.0;
  float distancia_cm = (duration * 0.034) / 2;
  return distancia_cm / 100.0; // metros
}

// --- FUNÇÃO ENVIO PARA BACKEND ---
void enviaLeitura(int sensorID, float valor) {
  WiFiClientSecure client;
  client.setInsecure();
  HTTPClient https;

  https.begin(client, serverURL);
  https.addHeader("Content-Type", "application/json");

  String json = "{\"sensorID\":" + String(sensorID) + ",\"valorMedido\":" + String(valor, 2) + "}";
  Serial.print("Enviando: ");
  Serial.println(json);

  int code = https.POST(json);
  Serial.print("Código resposta: ");
  Serial.println(code);
  if (code > 0) {
    String response = https.getString();
    Serial.println("Resposta servidor:");
    Serial.println(response);
  } else {
    Serial.print("Erro ao enviar POST: ");
    Serial.println(https.errorToString(code).c_str());
  }
  https.end();
}

// --- SETUP ---
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConectado ao Wi-Fi!");

  dht.begin();
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  pinMode(PLUVI_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(PLUVI_PIN), pluviInterruption, FALLING);

  Serial.println("Sistema iniciado.");
}

// --- LOOP ---
void loop() {


  unsigned long now = millis();

  // ---- LEITURA DHT22 (a cada 7s) ----
  if (now - previousMillisDHT >= intervalLeitura) {
    previousMillisDHT = now;

    float h = dht.readHumidity();
    float t = dht.readTemperature();

    if (!isnan(h)) enviaLeitura(SENSORID_DHT_UMID, h);
    else Serial.println("Falha na leitura de Umidade");

    if (!isnan(t)) enviaLeitura(SENSORID_DHT_TEMP, t);
    else Serial.println("Falha na leitura de Temperatura");
  }

  // ---- LEITURA ULTRASSÔNICO (a cada 7s, alternado) ----
  if (now - previousMillisUltra >= intervalLeitura) {
    previousMillisUltra = now;

    float dist = readUltrasonic();
    if (dist >= 0 && dist < 3.0) enviaLeitura(SENSORID_ULTRA, dist);
    else Serial.println("Falha leitura Ultrassônico");
  }

  // ---- LEITURA PLUVIÔMETRO (quando novo pulso) ----
  if (pluviCount != lastPluviCount) {
    float chuva = pluviCount * 0.25; // Cada pulso = 0.25mm (ajuste se necessário)
    enviaLeitura(SENSORID_PLUVI, chuva);
    lastPluviCount = pluviCount;
  }

  delay(100); // Loop rápido
}
