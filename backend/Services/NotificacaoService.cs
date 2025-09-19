using Microsoft.Extensions.Hosting;

public class NotificacaoService : BackgroundService {
  private readonly IServiceProvider _services;

  public NotificacaoService(IServiceProvider services) {
    _services = services;
  }

  protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
    while (!stoppingToken.IsCancellationRequested) {
      using (var scope = _services.CreateScope()) {
        var verificacao = scope.ServiceProvider.GetRequiredService<VerificacaoService>();

        try {
          Console.WriteLine("🔁 Rodando verificação automática...");
          await verificacao.VerificarUsuariosProximosAsync();
        }
        catch (Exception ex) {
          Console.WriteLine("❌ Erro na verificação automática: " + ex.Message);
        }
      }

      await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);
    }
  }
}


