using backend;
using backend.Models;
using backend.Services;
using Microsoft.EntityFrameworkCore;

public class VerificacaoService {
    private readonly Context _context;
    private readonly MapsService _mapsService;
    private readonly WhatsappService _whatsappService;

    public VerificacaoService(Context context, MapsService mapsService, WhatsappService whatsappService) {
        _context = context;
        _mapsService = mapsService;
        _whatsappService = whatsappService;
    }

    public async Task VerificarUsuariosProximosAsync() {
        double distanciaMaxima = 500; // Y → em metros
        int probabilidadeMinima = 10; // X → em %

        var usuarios = await _context.Usuarios
            .Where(u => u.DesejaNotificacao == true)
            .ToListAsync();

        var dispositivos = await _context.Dispositivos
            .Include(d => d.Localizacao)
            .ToListAsync();

        foreach (var usuario in usuarios) {
            // Última localização conhecida do usuário
            var ultimaConsulta = await _context.ConsultaUsuarioAlagamentos
                .Where(c => c.UsuarioFk == usuario.UsuarioId)
                .OrderByDescending(c => c.DataConsulta)
                .FirstOrDefaultAsync();

            if (ultimaConsulta == null)
                continue;

            // Encontrar dispositivo mais próximo
            Dispositivo? dispositivoMaisProximo = null;
            double menorDistancia = double.MaxValue;

            foreach (var dispositivo in dispositivos) {
                double distancia = _mapsService.CalcularDistancia(
                    ultimaConsulta.Latitude,
                    ultimaConsulta.Longitude,
                    dispositivo.Localizacao.Latitude.Value,
                    dispositivo.Localizacao.Longitude.Value
                );

                if (distancia < menorDistancia) {
                    menorDistancia = distancia;
                    dispositivoMaisProximo = dispositivo;
                }
            }

            if (dispositivoMaisProximo == null || menorDistancia > distanciaMaxima)
                continue;

            // Obter probabilidade do dispositivo
            dynamic dadosSensor = _mapsService.ObterDadosSensores(dispositivoMaisProximo.DispositivoId, _context);
            int probabilidade = dadosSensor.probabilidadeAlagamento ?? 0;

            // Se atingir os critérios → enviar alerta
            if (probabilidade >= probabilidadeMinima && menorDistancia <= distanciaMaxima) {
                string mensagem = $"🚨 Alerta! Probabilidade de alagamento de {probabilidade}% detectada próximo a você. " +
                                  $"Distância até o ponto crítico: {menorDistancia:F0} metros.";

                await _whatsappService.EnviarMensagem(usuario.Celular, mensagem);

                // Opcional: registrar no banco
                usuario.recebeuNotificacao = 1;
                await _context.SaveChangesAsync();
            }
        }
    }

}

    
