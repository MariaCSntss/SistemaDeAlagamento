using backend.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text;

namespace backend.Services {
    public class WhatsappService {
        public async Task EnviarMensagem(string numero, string mensagem) {
            // Exemplo com Z-API (https://z-api.io)
            var payload = new {
                phone = numero,
                message = mensagem
            };

            var client = new HttpClient();
            var json = JsonConvert.SerializeObject(payload);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            await client.PostAsync("https://api.z-api.io/instances/3E71765E5578803E7F603A43AE8FC5E9/token/249B299182A4C753D9F82AA1/send-text", content);
        }
    }
}
