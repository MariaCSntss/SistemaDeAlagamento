
using Microsoft.EntityFrameworkCore;
using System.Net.NetworkInformation;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using backend.Services;
using System.Text.Json.Serialization;
using lightning_core_api.Core.Services;

namespace backend {
    public enum ENV_TYPE {
        Production,
        Development,
        Local_Development
    }
    public class Program {
        public static string secretKey;
        public static string issuer;
        public static string audience;
        public static double durationUserToken;
        public static double durationDataCollectorToken;
        public static double durationEmailValidationToken;
        public static ENV_TYPE environment;
        public static string gestao_frontEndDomain;
        public static void Main(string[] args) {
            var macAddr = (
                from nic in NetworkInterface.GetAllNetworkInterfaces()
                where nic.OperationalStatus == OperationalStatus.Up
                select nic.GetPhysicalAddress().ToString()
            ).FirstOrDefault();

            var currentDir = AppContext.BaseDirectory.ToLower();
            switch (currentDir) {
                case "c:\\users\\nicolas\\desktop\\sm\\dev\\backend\\":
                    environment = ENV_TYPE.Development;
                    gestao_frontEndDomain = "dev-sm-api.lightning.tec.br";
                    break;
                case "c:\\users\\nicolas\\desktop\\sm\\prod\\backend\\":
                    environment = ENV_TYPE.Production;
                    gestao_frontEndDomain = "sm-api.lightning.tec.br";
                    break;
                default:
                    environment = ENV_TYPE.Local_Development;
                    gestao_frontEndDomain = "localhost:4200";
                    break;
            }

            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddScoped<VerificacaoService>();
            builder.Services.AddHttpClient<WhatsappService>();
            builder.Services.AddHostedService<NotificacaoService>();
            builder.Services.AddScoped<MapsService>();
            builder.Services.AddScoped<EmailService>();
            builder.Services.AddCors(options => {
                options.AddPolicy(name: "prod", policy => {
                    policy.WithOrigins(
                        "https://sm.lightning.tec.br")
                     .AllowAnyHeader()
                     .AllowCredentials()
                     .AllowAnyMethod()
                     .WithExposedHeaders("content-disposition");

                });
                options.AddPolicy(name: "dev", policy => {
                    policy.WithOrigins(
                        "https://dev-sm.lightning.tec.br",
                        "http://localhost:4200",
                        "http://localhost:7039",
                        "http://192.168.1.39:8080",
                        "http://127.0.0.1:8080")
                     .AllowAnyHeader()
                     .AllowCredentials()
                     .AllowAnyMethod()
                     .WithExposedHeaders("content-disposition");

                });
            });
            builder.Services.AddAuthentication(options => {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options => {
                options.RequireHttpsMetadata = true;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Program.issuer,
                    ValidAudience = Program.audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Program.secretKey)),
                    ClockSkew = TimeSpan.Zero
                };
            });

            builder.Services.AddAuthorization();
            builder.Services.AddControllers();


            // 1) Configura o serializador JSON para emitir enums como strings
            builder.Services.AddControllers()
                .AddJsonOptions(opts => {
                    opts.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                });
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(options => {
                var jwtSecurityScheme = new OpenApiSecurityScheme {
                    BearerFormat = "JWT",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = JwtBearerDefaults.AuthenticationScheme,
                    Description = "Insira seu Token de Acesso",
                    Reference = new OpenApiReference {
                        Id = JwtBearerDefaults.AuthenticationScheme,
                        Type = ReferenceType.SecurityScheme
                    }
                };
                options.AddSecurityDefinition("Bearer", jwtSecurityScheme);
                options.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    { jwtSecurityScheme, Array.Empty<string>() }
                });
                options.ParameterFilter<PasswordParameterFilter>();
                options.SwaggerDoc("v1", new OpenApiInfo {
                    Title = $"Sistema de Monitoramento Backend: {environment.ToString()} Environment",
                    Version = "v1",
                    Description = $"API responsavel pelo controle da Aplicacao Sistema de Monitoramento"
                });
            });

            builder.Services.AddControllers()
                .AddJsonOptions(x =>
                    x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);


            string? connectionString;
            switch (environment) {
                case ENV_TYPE.Development:
                    connectionString = Environment.GetEnvironmentVariable("sm-cs");
                    break;
                case ENV_TYPE.Production:
                    connectionString = Environment.GetEnvironmentVariable("sm-cs");
                    break;
                case ENV_TYPE.Local_Development:
                    connectionString = builder.Configuration.GetConnectionString("CoreDb");
                    break;
                default:
                    connectionString = "";
                    break;
            }





      builder.Services.AddEntityFrameworkSqlServer()
            .AddDbContext<Context>(options =>
                options
                    .UseSqlServer(connectionString)
                    // ??? Habilita log detalhado (mostra parâmetros dos comandos SQL)
                    .EnableSensitiveDataLogging()
                    // ??? Imprime cada instrução SQL no console/Output
                    .LogTo(Console.WriteLine,
                           Microsoft.Extensions.Logging.LogLevel.Information)
            );



            Program.secretKey = builder.Configuration["jwt:secretKey"];
            Program.issuer = builder.Configuration["jwt:issuer"];
            Program.audience = builder.Configuration["jwt:audience"];
            Program.durationUserToken = double.Parse(builder.Configuration["jwt:tokenValidityMins_User"]);
            Program.durationDataCollectorToken = double.Parse(builder.Configuration["jwt:tokenValidityMins_DataCollector"]);
            Program.durationEmailValidationToken = double.Parse(builder.Configuration["jwt:tokenValidityMins_EmailValidation"]);


            var app = builder.Build();

            app.UseStaticFiles(new StaticFileOptions {
                FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "assets")
    ),
                RequestPath = "/assets"
            });



            switch (environment) {
                case ENV_TYPE.Development:
                    app.UseCors("dev");
                    break;
        case ENV_TYPE.Production:
          app.UseCors("prod");
          break;

        case ENV_TYPE.Local_Development:
                    app.UseCors("dev");
                    break;
                default:
                    app.UseCors("dev");
                    break;
            }

            app.UseSwagger();
            app.UseSwaggerUI();
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
