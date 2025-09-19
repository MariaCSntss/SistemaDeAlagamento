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
  [Route("api/[controller]")]
  public class ConsultaUsuarioAlagamentoController : ControllerBase {
    private readonly Context _context;

    public ConsultaUsuarioAlagamentoController(Context context) {
      _context = context;
    }

    public class ConsultaUsuarioDto {
      public int UsuarioId { get; set; }
      public double Latitude { get; set; }
      public double Longitude { get; set; }
    }


    [HttpPost("enviar")]
    public async Task<IActionResult> EnviarOuAtualizarConsulta([FromBody] ConsultaUsuarioDto dto) {
      if (dto == null || dto.UsuarioId == 0)
        return BadRequest("Dados inválidos");

      var consultaExistente = await _context.ConsultaUsuarioAlagamentos
          .Where(c => c.UsuarioFk == dto.UsuarioId)
          .OrderByDescending(c => c.DataConsulta)
          .FirstOrDefaultAsync();

      if (consultaExistente != null) {
        // Atualiza a última consulta
        consultaExistente.Latitude = dto.Latitude;
        consultaExistente.Longitude = dto.Longitude;
        consultaExistente.DataConsulta = DateTime.Now;

        Console.WriteLine($"🔁 Atualizando consulta existente para usuário {dto.UsuarioId}");

        await _context.SaveChangesAsync();
        return Ok(new { mensagem = "Consulta atualizada com sucesso." });
      }
      else {
        // Cria nova consulta
        var novaConsulta = new ConsultaUsuarioAlagamento {
          UsuarioFk = dto.UsuarioId,
          Latitude = dto.Latitude,
          Longitude = dto.Longitude,
          DataConsulta = DateTime.Now
        };

        _context.ConsultaUsuarioAlagamentos.Add(novaConsulta);
        Console.WriteLine($"🆕 Criando nova consulta para usuário {dto.UsuarioId}");

        await _context.SaveChangesAsync();
        return Ok(new { mensagem = "Consulta criada com sucesso." });
      }
    }


  }


}
