#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <HTTPClient.h>

const char* ssid = "IMPLANTAR_MARIA CLARA";
const char* password = "999711712";

String serverURL = "https://192.168.1.5:7012/Sensores/enviar-leitura";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConectado ao Wi-Fi!");

  WiFiClientSecure client;
  client.setInsecure(); // ⚠️ Apenas para testes, ignora o certificado

  HTTPClient https;
  https.begin(client, serverURL);
  https.addHeader("Content-Type", "application/json");

  String json = R"({
    "sensorID": 1,
    "valorMedido": 78.6,
    "latitudeUsuario": -19.92,
    "longitudeUsuario": -43.94
  })";

  int httpResponseCode = https.POST(json);

  Serial.print("Código de resposta HTTPS: ");
  Serial.println(httpResponseCode);

  if (httpResponseCode > 0) {
    String response = https.getString();
    Serial.println("Resposta do servidor:");
    Serial.println(response);
  } else {
    Serial.print("Erro ao enviar POST: ");
    Serial.println(https.errorToString(httpResponseCode).c_str());
  }

  https.end();
}

void loop() {}
