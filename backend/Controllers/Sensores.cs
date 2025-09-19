using backend.Models;
using backend.Services;
using lightning_core_api.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    [Route("[controller]")]
    [ApiController]
    public class Sensores : ControllerBase {

        private readonly Context _context;

        public Sensores(Context context) {
            _context = context;
        }

    public class LeituraDTO {
      public int SensorID { get; set; }
      public double ValorMedido { get; set; }
      public double LatitudeUsuario { get; set; }
      public double LongitudeUsuario { get; set; }
    }

    [HttpPost("enviar-leitura")]
    public async Task<IActionResult> EnviarLeitura([FromBody] LeituraDTO leitura) {
      if (leitura == null)
        return BadRequest("Dados inválidos");

      var leituraExistente = await _context.LeituraHistoricos
          .FirstOrDefaultAsync(l => l.SensorFk == leitura.SensorID);

      if (leituraExistente != null) {
        leituraExistente.ValorMedido = leitura.ValorMedido;
        leituraExistente.DataHoraLeitura = DateTime.Now;
        _context.LeituraHistoricos.Update(leituraExistente);
      }
      else {
        var novaLeitura = new LeituraHistorico {
          SensorFk = leitura.SensorID,
          ValorMedido = leitura.ValorMedido,
          DataHoraLeitura = DateTime.Now
        };
        _context.LeituraHistoricos.Add(novaLeitura);
      }

      await _context.SaveChangesAsync();

      return Ok(new { mensagem = "Leitura registrada!" });
    }


    [HttpGet("dados-sensores")]
        public IActionResult ObterDadosSensoresPorDispositivo(int dispositivoId) {
            var sensores = _context.Sensors
                .Where(s => s.DispositivoFk == dispositivoId)
                .Include(s => s.LeituraHistoricos)
                .ToList();

            double? T = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("Temperatura", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

      double? U = sensores.FirstOrDefault(s =>
                   s.Tipo.Equals("Umidade", StringComparison.OrdinalIgnoreCase))
               ?.LeituraHistoricos?
               .OrderByDescending(l => l.DataHoraLeitura)
               .FirstOrDefault()?.ValorMedido;

      double? N = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("Nível", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? P = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("Pluviométrico", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            

            int probabilidade = new MapsService().CalcularProbabilidade(T,U, N, P);

            var lista = new List<object>();
            foreach (var sensor in sensores) {
                var ultimaLeitura = sensor.LeituraHistoricos
                    .OrderByDescending(l => l.DataHoraLeitura)
                    .FirstOrDefault();

                if (ultimaLeitura != null) {
                    lista.Add(new {
                        tipo = sensor.Tipo,
                        valor = ultimaLeitura.ValorMedido,
                        unidadeMedida = sensor.UnidadeMedida
                    });
                }
            }

            return Ok(new {
                probabilidadeAlagamento = probabilidade,
                sensores = lista
            });
        }




    }
}
