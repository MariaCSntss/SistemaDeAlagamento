using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public partial class ConsultaUsuarioAlagamento
{
    public int Id { get; set; }

    public int UsuarioFk { get; set; }

    [ForeignKey(nameof(UsuarioFk))]
    public Usuario? Usuario { get; set; }

    public double Latitude { get; set; }

    public double Longitude { get; set; }

    public DateTime? DataConsulta { get; set; }

}
