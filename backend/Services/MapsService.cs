using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services {
    public class MapsService {


        public double CalcularDistancia(double lat1, double lon1, double lat2, double lon2) {
            var R = 6371000.0; // raio da Terra em metros
            var dLat = ToRadians(lat2 - lat1);
            var dLon = ToRadians(lon2 - lon1);
            var a =
                Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                Math.Cos(ToRadians(lat1)) * Math.Cos(ToRadians(lat2)) *
                Math.Sin(dLon / 2) * Math.Sin(dLon / 2);
            var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
            return R * c;
        }

        private double ToRadians(double angle) {
            return angle * Math.PI / 180.0;
        }

        public object ObterDadosSensores(int dispositivoId, Context _context) {



            var sensores = _context.Sensors
                .Where(s => s.DispositivoFk == dispositivoId)
                .Include(s => s.LeituraHistoricos)
                .ToList();

            double? nivelAgua = sensores.FirstOrDefault(s => s.Tipo == "nível")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? vasao = sensores.FirstOrDefault(s => s.Tipo == "vazao")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? precipitacao = sensores.FirstOrDefault(s => s.Tipo == "precipitacao")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? umidade = sensores.FirstOrDefault(s => s.Tipo == "umidade")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            return new {
                nivelAgua = nivelAgua ?? 0,
                vasao = vasao ?? 0,
                precipitacao = precipitacao ?? 0,
                umidadeSolo = umidade ?? 0,
                probabilidadeAlagamento = CalcularProbabilidade(nivelAgua, vasao, precipitacao, umidade)
            };
        }

        public int CalcularProbabilidade(double? nivel, double? vasao, double? precipitacao, double? umidade) {

            // Define limites de risco, acima desse valor é considerado crítico
            double nivelMax = 50.0;       // 100 cm = risco crítico
            double vasaoMax = 10.0;        // 50 L/s (ajustável)
            double precipitacaoMax = 10.0; // 80 mm em 24h
            double umidadeMax = 20.0;     // %

            // Trazendo os valores para uma mesma escala (entre 0 e 1 ) 
            double nivelNorm = Math.Min((nivel ?? 0) / nivelMax, 1.0);
            double vasaoNorm = Math.Min((vasao ?? 0) / vasaoMax, 1.0);
            double precipitacaoNorm = Math.Min((precipitacao ?? 0) / precipitacaoMax, 1.0);
            double umidadeNorm = Math.Min((umidade ?? 0) / umidadeMax, 1.0);

            // Pesos (baseados na influência no alagamento)
            double pesoNivel = 0.4;
            double pesoVasao = 0.2;
            double pesoPrecipitacao = 0.25;
            double pesoUmidade = 0.15;

            // Cálculo da pontuação
            double score =
                nivelNorm * pesoNivel +
                vasaoNorm * pesoVasao +
                precipitacaoNorm * pesoPrecipitacao +
                umidadeNorm * pesoUmidade;

            return (int)(score * 100);
        }

    }
}
