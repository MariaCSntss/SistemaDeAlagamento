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

            double? temperatura = sensores.FirstOrDefault(s => s.Tipo == "Temperatura")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

      double? umidade = sensores.FirstOrDefault(s => s.Tipo == "Umidade")
               ?.LeituraHistoricos?
               .OrderByDescending(l => l.DataHoraLeitura)
               .FirstOrDefault()?.ValorMedido;

      double? nivel = sensores.FirstOrDefault(s => s.Tipo == "Nível")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

            double? pluviometrico = sensores.FirstOrDefault(s => s.Tipo == "Pluviométrico")
                ?.LeituraHistoricos?
                .OrderByDescending(l => l.DataHoraLeitura)
                .FirstOrDefault()?.ValorMedido;

;

            return new {
                temperatura = temperatura ?? 0,
                umidade = umidade ?? 0,
                nivel = nivel ?? 0,
                pluviometrico = pluviometrico ?? 0,
                probabilidadeAlagamento = CalcularProbabilidade(temperatura, umidade, nivel, pluviometrico)
            };
        }

        public int CalcularProbabilidade(double? T, double? U, double? N, double? P) {

            // Define limites de risco, acima desse valor é considerado crítico
            double TMax = 50.0;      
            double UMax = 50.0;      
            double NMax = 10.0;       
            double PMax = 10.0; 
         

            // Trazendo os valores para uma mesma escala (entre 0 e 1 ) 
            double tempNorm = Math.Min((T ?? 0) / TMax, 1.0);
            double umidNorm = Math.Min((U ?? 0) / UMax, 1.0);
            double nivelNorm = Math.Min((N ?? 0) / NMax, 1.0);
            double pluviNorm = Math.Min((P?? 0) / PMax, 1.0);

            // Pesos (baseados na influência no alagamento)
            double pesoT= 0.4;
            double pesoU = 0.15;
            double pesoN = 0.2;
            double pesoP = 0.25;

      // Cálculo da pontuação
      double score =
          tempNorm * pesoT +
          nivelNorm * pesoN +
          pluviNorm * pesoP +
          umidNorm * pesoU;

            return (int)(score * 100);
        }

    }
}
