using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Usuario
{
    public int UsuarioId { get; set; }

    public string? NomeCompleto { get; set; }

    public string? Email { get; set; }

    public string? Senha { get; set; }

    public string? Celular { get; set; }

    public bool DesejaNotificacao { get; set; }

    public int? recebeuNotificacao { get; set; }

}
