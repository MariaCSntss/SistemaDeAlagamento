using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public partial class Sensor
{
    public int SensorId { get; set; }

    public int? DispositivoFk { get; set; }

    [ForeignKey(nameof(DispositivoFk))]
    public Dispositivo? Dispositivo { get; set; }

    public string? Tipo { get; set; }

    public string? UnidadeMedida { get; set; }

    public List<LeituraHistorico>? LeituraHistoricos { get; set; }
}
