using backend.Models;
using backend.Services;
using DocumentFormat.OpenXml.Math;
using lightning_core_api.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text;

namespace backend.Controllers {
    [Route("[controller]")]
    [ApiController]
    public class Usuarios : ControllerBase {
        private readonly Context _context;
        private readonly CriptografiaService _criptografiaService;
        private readonly RegexServices _regexServices;
        private readonly EmailService _emailService;
        private readonly UsersServices _usersServices;
        private readonly MapsService _mapsService;
        private readonly VerificacaoService _verificacao;
        private readonly WhatsappService _whatsappService;


    public Usuarios(Context context, EmailService emailService) {
            _context = context;
            _criptografiaService = new CriptografiaService();
            _regexServices = new RegexServices();
            _emailService = emailService;
            _usersServices = new UsersServices();
            _mapsService = new MapsService();
         

    }

        public class LoginRequest {
            public string Email { get; set; }
            public string Senha { get; set; }
        }

    public class LocalizacaoUsuarioDTO {
      public int UsuarioId { get; set; }
      public double Latitude { get; set; }
      public double Longitude { get; set; }
    }


    [HttpPut("enviar-notificacao")]
        public async Task<IActionResult> EnviarNotificacao([FromForm] int usuarioId, [FromForm] bool desejaNotificacao) {

            var usuario = await _context.Usuarios.FindAsync(usuarioId);

            if (usuario == null) {
                return NotFound(new {mensagem = "Usuário não encontrado"});
            }


            usuario.DesejaNotificacao = desejaNotificacao;
           
            

            _context.Usuarios.Update(usuario);
            await _context.SaveChangesAsync();

            return Ok(new { mensagem = "Preferência de notificação atualizada com sucesso!" });
        }

        [HttpPost("post/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest login) {
            var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == login.Email.ToLower());

            if (user == null)
                return BadRequest(new { message = "Usuário não encontrado ou não habilitado." });

            if (!_criptografiaService.autentificarCriptografia(login.Senha, user.Senha))
                return BadRequest(new { message = "Senha incorreta." });

            return Ok(new {
                message = $"Olá {user.NomeCompleto}!",
                data = new {
                    usuarioID = user.UsuarioId,
                    nomeCompleto = user.NomeCompleto,
                    email = user.Email,
                    celular = user.Celular,
                    desejaNotificacao = user.DesejaNotificacao,
                    recebeuNotificacao = user.recebeuNotificacao,
                    token = _usersServices.gerarTokenJWT(user.UsuarioId, user.Email.ToLower(), "Usuario")
                }
            });

        }



    [HttpPost("post")]
    public async Task<IActionResult> CriarUsuario([FromBody] Usuario novoUsuario) {
      try {
        if (!_regexServices.apenasTextoValido(novoUsuario.NomeCompleto, 100))
          return BadRequest(new { message = "Primeiro nome inválido" });

        if (!_regexServices.emailValido(novoUsuario.Email))
          return BadRequest(new { message = "Email inválido" });

        if (!_regexServices.senhaValida(novoUsuario.Senha))
          return BadRequest(new { message = "Senha inválida" });

        if (!_regexServices.apenasNumerosValido(novoUsuario.Celular, 20))
          return BadRequest(new { message = "Celular inválido" });

        novoUsuario.DesejaNotificacao = false;
        novoUsuario.recebeuNotificacao = 0;

        bool existe = await _context.Usuarios.AnyAsync(u => u.Email == novoUsuario.Email.ToLower());
        if (existe)
          return BadRequest(new { message = "Email já cadastrado" });

        novoUsuario.Email = novoUsuario.Email.ToLower();
        novoUsuario.Senha = _criptografiaService.Encriptar(novoUsuario.Senha);

        _context.Usuarios.Add(novoUsuario);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Usuário criado com sucesso" });
      }
      catch (Exception ex) {
        return StatusCode(500, new {
          message = "Erro interno no servidor",
          detalhe = ex.Message,
          inner = ex.InnerException?.Message,
          stack = ex.StackTrace
        });
      }

    }


    [HttpGet("verificar")]
    public async Task<IActionResult> Verificar() {
      await _verificacao.VerificarUsuariosProximosAsync();
      return Ok("Verificação finalizada.");
    }

    [HttpGet("obter/{usuarioId}")]
    public async Task<IActionResult> ObterUsuario(int usuarioId) {
      var usuario = await _context.Usuarios.FindAsync(usuarioId);
      if (usuario == null)
        return NotFound();

      return Ok(new {
        usuarioId = usuario.UsuarioId,
        desejaNotificacao = usuario.DesejaNotificacao,
        // outros campos se quiser
      });
    }



    [HttpGet("get")]
     
        public async Task<IActionResult> GetUsuarios() {
            var usuarios = await _context.Usuarios.ToListAsync();
            usuarios.ForEach(u => u.Senha = null);
            return Ok(usuarios);
        }

        [HttpDelete("delete")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteUsuario(int id) {
            var user = await _context.Usuarios.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "Usuário não encontrado" });

            _context.Usuarios.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Usuário deletado com sucesso" });
        }

        [HttpPut("put")]
    
        public async Task<IActionResult> EditarUsuario([FromBody] Usuario usuarioEditado) {
            var usuario = await _context.Usuarios.FindAsync(usuarioEditado.UsuarioId);
            if (usuario == null)
                return NotFound(new { message = "Usuário não encontrado" });

            usuario.NomeCompleto = usuarioEditado.NomeCompleto ?? usuario.NomeCompleto;
            usuario.Celular = usuarioEditado.Celular ?? usuario.Celular;

            if (!string.IsNullOrEmpty(usuarioEditado.Senha))
                usuario.Senha = _criptografiaService.Encriptar(usuarioEditado.Senha);

            await _context.SaveChangesAsync();
            return Ok(new { message = "Usuário atualizado com sucesso" });
        }
    [HttpPost("verificar-localizacoes")]
    public async Task<IActionResult> VerificarLocalizacoesAsync() {
      const double RAIO_METROS = 2000;
      const int PROB_LIMITE = 70;

      var usuarios = await _context.Usuarios
          .Where(u => u.DesejaNotificacao == true)
          .ToListAsync();

      // Inclui localização dos dispositivos via join
      var dispositivosComLocal = await _context.Dispositivos
          .Include(d => d.Localizacao)
          .Where(d => d.Localizacao.Latitude != 0 && d.Localizacao.Longitude != 0)
          .ToListAsync();

      if (!usuarios.Any() || !dispositivosComLocal.Any())
        return Ok("Sem usuários ou dispositivos com localização válida.");

      foreach (var usuario in usuarios) {
        var ultimaConsulta = await _context.ConsultaUsuarioAlagamentos
            .Where(c => c.UsuarioFk == usuario.UsuarioId)
            .OrderByDescending(c => c.DataConsulta)
            .FirstOrDefaultAsync();

        if (ultimaConsulta == null || ultimaConsulta.Latitude == 0 || ultimaConsulta.Longitude == 0)
          continue;

        foreach (var dispositivo in dispositivosComLocal) {
          var loc = dispositivo.Localizacao;

          var distancia = _mapsService.CalcularDistancia(
              ultimaConsulta.Latitude, ultimaConsulta.Longitude,
              loc.Latitude, loc.Longitude);

          if (distancia <= RAIO_METROS) {
            var dados = _mapsService.ObterDadosSensores(dispositivo.DispositivoId, _context);

            int prob = (int)dados.GetType().GetProperty("probabilidadeAlagamento")?.GetValue(dados) ;

            if (prob >= PROB_LIMITE) {
              await _whatsappService.EnviarMensagem(usuario.Celular,
                  $"🚨 Alerta de Alagamento 🚨\nVocê está em uma área de risco!\nProbabilidade: {prob}%");

              // Log opcional
              Console.WriteLine($"✅ Alerta enviado para {usuario.Celular} com {prob}% (distância: {Math.Round(distancia)}m)");
            }
          }
        }
      }

      return Ok("Verificação finalizada.");
    }




  }


}
