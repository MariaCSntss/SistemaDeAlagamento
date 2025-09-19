using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace backend.Services {
  public class WhatsappService {
    private readonly HttpClient _http;

    public WhatsappService(HttpClient http) {
      _http = http;
    }

    public async Task EnviarMensagem(string numero, string mensagem) {
      var payload = new {
        phone = numero,         
        message = mensagem      
      };

      var json = JsonSerializer.Serialize(payload);
      var content = new StringContent(json, Encoding.UTF8, "application/json");

      try {
        var resposta = await _http.PostAsync("http://localhost:3000/enviar-mensagem", content);
        var respostaTexto = await resposta.Content.ReadAsStringAsync();

        if (!resposta.IsSuccessStatusCode) {
          Console.WriteLine($"❌ Erro ao enviar WhatsApp: {respostaTexto}");
        }
        else {
          Console.WriteLine($"📨 Mensagem enviada com sucesso! Resposta do BOT: {respostaTexto}");
        }
      }
      catch (Exception ex) {
        Console.WriteLine($"❌ Erro ao conectar com o bot: {ex.Message}");
      }
    }
  }
}

