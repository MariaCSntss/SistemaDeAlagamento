using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public partial class Dispositivo
{
    public int DispositivoId { get; set; }

    public string? Nome { get; set; }

    public int? LocalizacaoFk { get; set; }

    [ForeignKey(nameof(LocalizacaoFk))]
    public Localizacao? Localizacao { get; set; }

    public List<Sensor>? Sensores { get; set; }
}
