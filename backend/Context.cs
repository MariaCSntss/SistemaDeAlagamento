using System;
using System.Collections.Generic;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend;

public partial class Context : DbContext
{
    public Context()
    {
    }

    public Context(DbContextOptions<Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Dispositivo> Dispositivos { get; set; }
    public virtual DbSet<LeituraHistorico> LeituraHistoricos { get; set; }
    public virtual DbSet<Localizacao> Localizacaos { get; set; }
    public virtual DbSet<Sensor> Sensors { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }
    public virtual DbSet<ConsultaUsuarioAlagamento> ConsultaUsuarioAlagamentos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dispositivo>(entity => {
            entity.HasKey(e => e.DispositivoId).HasName("PK__Disposit__724C264114C2B25E");

            entity.ToTable("Dispositivo");

            entity.Property(e => e.DispositivoId).HasColumnName("DispositivoID");
            entity.Property(e => e.LocalizacaoFk).HasColumnName("LocalizacaoFK");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<LeituraHistorico>(entity => {
            entity.HasKey(e => e.LeituraHistId).HasName("PK__LeituraH__B6A4D01C58FD6352");

            entity.ToTable("LeituraHistorico");

            entity.Property(e => e.LeituraHistId).HasColumnName("LeituraHistID");
            entity.Property(e => e.DataHoraLeitura)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SensorFk).HasColumnName("SensorFK");
        });

        modelBuilder.Entity<Localizacao>(entity => {
            entity.HasKey(e => e.LocalizacaoId).HasName("PK__Localiza__83ABDECABA5C1065");

            entity.ToTable("Localizacao");

            entity.Property(e => e.LocalizacaoId).HasColumnName("LocalizacaoID");
            entity.Property(e => e.Descricao)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Sensor>(entity => {
            entity.HasKey(e => e.SensorId).HasName("PK__Sensor__D809841AA7D17F74");

            entity.ToTable("Sensor");

            entity.Property(e => e.SensorId).HasColumnName("SensorID");
            entity.Property(e => e.DispositivoFk).HasColumnName("DispositivoFK");
            entity.Property(e => e.Tipo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UnidadeMedida)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity => {
            entity.HasKey(e => e.UsuarioId).HasName("PK__Usuarios__2B3DE79890869AE7");

            entity.Property(e => e.UsuarioId).HasColumnName("UsuarioID");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.NomeCompleto)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Senha).IsUnicode(false);
            entity.Property(e => e.Celular)
               .HasMaxLength(20)
               .IsUnicode(false);
            entity.Property(e => e.recebeuNotificacao).HasColumnName("recebeuNotificacao");
        });

        modelBuilder.Entity<ConsultaUsuarioAlagamento>(entity => {
            entity.HasKey(e => e.Id).HasName("PK__Consulta__3214EC07224A28A2");

            entity.ToTable("ConsultaUsuarioAlagamento");

            entity.Property(e => e.DataConsulta)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.UsuarioFk).HasColumnName("UsuarioFK");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
