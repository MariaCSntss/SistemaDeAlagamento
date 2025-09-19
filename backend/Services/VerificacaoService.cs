using backend;
using backend.Models;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

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

    

    double distanciaMaxima = 5000; // metros
    int probabilidadeMinima = 10; // %

    var usuarios = await _context.Usuarios
        .Where(u => u.DesejaNotificacao == true && !string.IsNullOrEmpty(u.Celular))
        .ToListAsync();

    var dispositivos = await _context.Dispositivos
        .Include(d => d.Localizacao)
        .ToListAsync();

    foreach (var usuario in usuarios) {
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"=======");
      Console.WriteLine($"👤 Verificando usuário: {usuario.NomeCompleto}");

      var ultimaConsulta = await _context.ConsultaUsuarioAlagamentos
          .Where(c => c.UsuarioFk == usuario.UsuarioId)
          .OrderByDescending(c => c.DataConsulta)
          .FirstOrDefaultAsync();

      if (ultimaConsulta == null) {
        Console.WriteLine($"⚠️ Nenhuma consulta encontrada para {usuario.NomeCompleto}");
        continue;
      }

      Console.WriteLine($"📍 Última consulta de {usuario.NomeCompleto}: ({ultimaConsulta.Latitude}, {ultimaConsulta.Longitude})");

      Dispositivo? dispositivoMaisProximo = null;
      double menorDistancia = double.MaxValue;

      foreach (var dispositivo in dispositivos) {

        double distancia = _mapsService.CalcularDistancia(
      ultimaConsulta.Latitude,
      ultimaConsulta.Longitude,
      dispositivo.Localizacao.Latitude,
      dispositivo.Localizacao.Longitude
  );

        try {
          dynamic dadosSensores = _mapsService.ObterDadosSensores(dispositivo.DispositivoId, _context);
          int probabilidades = dadosSensores?.probabilidadeAlagamento ?? 0;

          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"📡 Dispositivo: {dispositivo.Nome} - Distância: {distancia:F2}m - Probabilidade: {probabilidades}%");

          // Verifica se esse é o melhor candidato para envio de alerta
          if (distancia < menorDistancia && probabilidades >= probabilidadeMinima) {
            menorDistancia = distancia;
            dispositivoMaisProximo = dispositivo;
          }
        }
        catch (Exception ex) {
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"=======");
          Console.WriteLine($"❌ Erro ao obter dados dos sensores: {ex.Message}");
        }


        if (distancia < menorDistancia) {
          menorDistancia = distancia;
          dispositivoMaisProximo = dispositivo;
        }
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        if (dispositivoMaisProximo != null)
          Console.WriteLine($"📡 Dispositivo mais próximo: {dispositivoMaisProximo.Nome} (Distância: {menorDistancia:F2}m)");
        else
          Console.WriteLine($"❌ Nenhum dispositivo próximo encontrado para {usuario.NomeCompleto}");
      }

      if (dispositivoMaisProximo == null || menorDistancia > distanciaMaxima)
        continue;

      dynamic dadosSensor = _mapsService.ObterDadosSensores(dispositivoMaisProximo.DispositivoId, _context);
      int probabilidade = dadosSensor.probabilidadeAlagamento ?? 0;

      if (probabilidade >= probabilidadeMinima && menorDistancia <= distanciaMaxima) {
        string numeroFormatado = Regex.Replace(usuario.Celular, "[^0-9]", "");

        string mensagem = $"🚨 Alerta! Probabilidade de alagamento de {probabilidade}% detectada próximo a você. " +
                          $"Distância até o ponto crítico: {menorDistancia:F0} metros.";

        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");
        Console.WriteLine($"=======");

        Console.WriteLine($"📤 Enviando alerta para {usuario.NomeCompleto} ({numeroFormatado})");

        await _whatsappService.EnviarMensagem(numeroFormatado, mensagem);

        usuario.recebeuNotificacao = 1;
        await _context.SaveChangesAsync();
      }
    }


  }




}


