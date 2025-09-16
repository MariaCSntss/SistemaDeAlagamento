using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Localizacao
{
    public int LocalizacaoId { get; set; }

    public string? Descricao { get; set; }

    public double? Latitude { get; set; }

    public double? Longitude { get; set; }

    public List<Dispositivo>? Dispositivos{ get; set; }
}
