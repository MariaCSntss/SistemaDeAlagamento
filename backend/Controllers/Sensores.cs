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
        [HttpPost("enviar-leitura")]
        public async Task<IActionResult> EnviarLeitura([FromBody] LeituraDTO leitura) {
            if (leitura == null)
                return BadRequest("Dados inválidos");

            var novaLeitura = new LeituraHistorico {
                SensorFk = leitura.SensorID,
                ValorMedido = leitura.ValorMedido,
                DataHoraLeitura = DateTime.Now,
            };

            _context.LeituraHistoricos.Add(novaLeitura);
            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Leitura recebida com sucesso!" });
        }

        [HttpGet("dados-sensores")]
        public IActionResult ObterDadosSensoresPorDispositivo(int dispositivoId) {
            var sensores = _context.Sensors
                .Where(s => s.DispositivoFk == dispositivoId)
                .Include(s => s.LeituraHistoricos)
                .ToList();

            double? nivel = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("nível", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? vasao = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("vazão", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? precipitacao = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("precipitacao", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? umidade = sensores.FirstOrDefault(s =>
                    s.Tipo.Equals("umidade", StringComparison.OrdinalIgnoreCase))
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            int probabilidade = new MapsService().CalcularProbabilidade(nivel, vasao, precipitacao, umidade);

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