using backend.Models;
using backend.Services;
using lightning_core_api.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers {
    [Route("[controller]")]
    [ApiController]
    public class Localizacoes : ControllerBase {

        private readonly Context _context;
        private readonly MapsService _mapsService;

        public Localizacoes(Context context, MapsService mapsService)  {
                _context = context;
                _mapsService = mapsService;
            }

    public class LocalizacaoDTO {
      public int LocalizacaoID { get; set; }      // ID que já existe na tabela
      public double Latitude { get; set; }
      public double Longitude { get; set; }
    }


    [HttpGet("mais-proximo")]
            public IActionResult GetSensorMaisProximo(double lat, double lng) {

            var sensores = _context.Dispositivos
     .Include(d => d.Localizacao)
     .Where(d => d.Localizacao != null &&
                 d.Localizacao.Latitude != null &&
                 d.Localizacao.Longitude != null)
     .ToList();



            var sensorMaisProximo = sensores
    .Select(s => new {
        s,
        distancia = _mapsService.CalcularDistancia(
            lat,
            lng,
            s.Localizacao?.Latitude ?? 0,
            s.Localizacao?.Longitude ?? 0
        )
    })
    .OrderBy(x => x.distancia)
    .FirstOrDefault();

            if (sensorMaisProximo == null) {
                return NotFound(new { message = "Nenhum sensor encontrado com localização válida." });
            }


            var dados = _mapsService.ObterDadosSensores(sensorMaisProximo.s.DispositivoId, _context);

            return Ok(new {
                dispositivoId = sensorMaisProximo.s.DispositivoId,
                nome = sensorMaisProximo.s.Localizacao.Descricao,
                distanciaMetros = Math.Round(sensorMaisProximo.distancia, 1),
                coordenadas = new {
                    lat = sensorMaisProximo.s.Localizacao.Latitude,
                    lng = sensorMaisProximo.s.Localizacao.Longitude
                },
                dadosSensores = dados

            }) ;
            }

    [HttpPost("atualizar-localizacao")]
    public async Task<IActionResult> AtualizarLocalizacao([FromBody] LocalizacaoDTO dto) {
      // Busca pelo ID informado
      var localizacao = await _context.Localizacaos.FindAsync(dto.LocalizacaoID);
      if (localizacao == null)
        return NotFound("Localização não encontrada");

      // Atualiza os campos
      localizacao.Latitude = dto.Latitude;
      localizacao.Longitude = dto.Longitude;
      await _context.SaveChangesAsync();

      return Ok("Localização atualizada com sucesso!");
    }
  }



    }


        


