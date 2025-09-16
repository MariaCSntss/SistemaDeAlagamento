using backend;
using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace lightning_core_api.Core.Services
{
    public enum Keys
    {
        Admin,
        Supervisor_Planejamento,
        Usuario,
        DataCollector,
        EmailValidation,
    }
    public class PasswordParameterFilter : IParameterFilter
    {
        public void Apply(OpenApiParameter parameter, ParameterFilterContext context)
        {
            if (parameter.Name.ToLower().Contains("senha"))
            {
                parameter.Schema.Format = "password";
            }
        }
    }
    public class UsersServices
    {
        public Keys Keys = new Keys();
        public string gerarTokenJWT(int id, string email, string chave)
        {

            DateTime tokenExpiryTimeStamp;

            if (chave == "DataCollector")
            {
                tokenExpiryTimeStamp = DateTime.UtcNow.AddMinutes(Program.durationDataCollectorToken);
            }
            else if(chave == "EmailValidation")
            {
                tokenExpiryTimeStamp = DateTime.UtcNow.AddMinutes(Program.durationEmailValidationToken);
            }
            else
            {
                tokenExpiryTimeStamp = DateTime.UtcNow.AddMinutes(Program.durationUserToken);
            }

            var claims = new[]
            {
                new Claim ("id",id.ToString()),
                new Claim ("email",email),
                new Claim (JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()),
                new Claim( "role", chave)
            };

            var privateKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Program.secretKey));

            var credentitals = new SigningCredentials(privateKey, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: Program.issuer,
                audience: Program.audience,
                expires: tokenExpiryTimeStamp,
                claims: claims,
                signingCredentials: credentitals
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


    }
}
