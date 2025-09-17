using backend.Models;
using backend.Services;
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

    [HttpPost("verificar")]
    public async Task<IActionResult> Verificar() {
      await _verificacao.VerificarUsuariosProximosAsync();
      return Ok("Verificação finalizada.");
    }



    [HttpGet("get")]
        [Authorize(Roles = "Admin")]
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
        [Authorize(Roles = "Admin")]
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
    }
}
