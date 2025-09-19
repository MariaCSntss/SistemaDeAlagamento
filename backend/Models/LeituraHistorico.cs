using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public partial class LeituraHistorico
{
    public int LeituraHistId { get; set; }

    public int? SensorFk { get; set; }

    [ForeignKey(nameof(SensorFk))]
    public Sensor? Sensor { get; set; }

    public double? ValorMedido { get; set; }

    public DateTime? DataHoraLeitura { get; set; }


}
