#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>

const char* ssid = "IMPLANTAR_MARIA CLARA";
const char* password = "999711712";

String serverURL = "https://192.168.1.5:7012/Sensores/enviar-leitura";

struct Sensor {
  int sensorID;
  int pin;
};

Sensor sensores[] = {
  {1, 34}, // SensorID 1, pino 34
  {2, 35}, // SensorID 2, pino 35
  {3, 32}  // SensorID 3, pino 32
};

const int numSensores = sizeof(sensores) / sizeof(sensores[0]);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConectado ao Wi-Fi!");


  for (int i = 0; i < numSensores; i++) {
    pinMode(sensores[i].pin, INPUT);
  }
}

void loop() {
  WiFiClientSecure client;
  client.setInsecure(); 

  for (int i = 0; i < numSensores; i++) {
    int leitura = analogRead(sensores[i].pin); 
    float valorConvertido = leitura * (3.3 / 4095.0); // convertendo para tensão nesse caso ( verificar conversão)

    HTTPClient https;
    https.begin(client, serverURL);
    https.addHeader("Content-Type", "application/json");

    // JSON para cada sensor
    String json = "{";
    json += "\"sensorID\":" + String(sensores[i].sensorID) + ",";
    json += "\"valorMedido\":" + String(valorConvertido, 2);
    json += "}";

    Serial.print("Enviando para SensorID ");
    Serial.print(sensores[i].sensorID);
    Serial.print(": ");
    Serial.println(json);

    int httpResponseCode = https.POST(json);

    Serial.print("Código resposta: ");
    Serial.println(httpResponseCode);

    if (httpResponseCode > 0) {
      String response = https.getString();
      Serial.println("Resposta servidor:");
      Serial.println(response);
    } else {
      Serial.print("Erro ao enviar POST: ");
      Serial.println(https.errorToString(httpResponseCode).c_str());
    }

    https.end();

    delay(2000); // Aguarda 2 segundos entre cada sensor 
  }

  delay(10000); // Aguarda 10 segundos para nova rodada de leituras
}
