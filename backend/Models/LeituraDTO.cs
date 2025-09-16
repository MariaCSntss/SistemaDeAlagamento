using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class LeituraDTO {
    public int SensorID { get; set; }
    public double ValorMedido { get; set; }
    public double LatitudeUsuario { get; set; }
    public double LongitudeUsuario { get; set; }
}
