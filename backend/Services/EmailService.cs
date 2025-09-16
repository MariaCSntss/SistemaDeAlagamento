namespace backend.Services
{
    using System.Net;
    using System.Net.Mail;
    using System.Text;
    using Azure;
    using backend.Models;
    using DocumentFormat.OpenXml.Bibliography;
    using DocumentFormat.OpenXml.Wordprocessing;
    using Microsoft.Extensions.Configuration;
    using static QRCoder.PayloadGenerator;

    public class EmailService
    {
        private readonly IConfiguration _config;

        public EmailService(IConfiguration config)
        {
            _config = config;
        }

        public async Task EnviarEmailAsync(string destinatario, string assunto, string mensagem)
        {
            var remetente = _config["EmailSettings:Remetente"];
            var senha = _config["EmailSettings:Senha"];
            var smtpServidor = _config["EmailSettings:Smtp"];
            var porta = int.Parse(_config["EmailSettings:Porta"]);

            var mail = new MailMessage
            {
                From = new MailAddress(remetente, "🤖 E.V.A "), // <- opcional: nome do remetente
                Subject = assunto,
                Body = mensagem,
                IsBodyHtml = true,
                BodyEncoding = System.Text.Encoding.UTF8,
                SubjectEncoding = System.Text.Encoding.UTF8
            };

            try
            {
                mail.To.Add(destinatario);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }


            using var smtp = new SmtpClient(smtpServidor, porta)
            {
                Credentials = new NetworkCredential(remetente, senha),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                TargetName = "STARTTLS/smtp.zoho.com" // força TLS, evita rejeições silenciosas
            };

            try
            {
                await smtp.SendMailAsync(mail);
                Console.WriteLine("E-mail enviado.");
            }
            catch (SmtpException ex)
            {
                Console.WriteLine($"Erro SMTP: {ex.StatusCode} - {ex.Message}");
                throw;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro geral: {ex.Message}");
                throw;
            }
        }


      
        public string EmailTemplate_SolicitacaoAprovada(string primeiroNome)
        {
            return $@"
                <!DOCTYPE html>
                <html>
                  <body style=""margin:0; padding:0; background-color:#f4f4f4;"">
                    <table width=""100%"" cellpadding=""0"" cellspacing=""0"" style=""background-color:#f4f4f4; padding: 20px;"">
                      <tr>
                        <td align=""center"">
                          <table width=""600"" cellpadding=""0"" cellspacing=""0"" style=""background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 0 10px rgba(0,0,0,0.1); font-family:Arial, sans-serif;"">
            
                            <tr>
                              <td align=""center"" style=""background-color:#007bff; padding:20px;"">
                                <h1 style=""color:#ffffff; margin:0; font-size:24px;"">Olá, {primeiroNome}!</h1>
                              </td>
                            </tr>

                            <tr>
                              <td style=""padding:30px;"">

                                <p style=""font-size:16px; color:#333333; margin-bottom:20px;"">
                                  Sua solicitação de conta acaba de ser aprovada!
                                </p>
                
                                <div style=""margin:30px 0; text-align:center;"">
                                  <a href=""https://{Program.gestao_frontEndDomain}/"" style=""background-color:#007bff; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; font-size:16px;"">
                                    Fazer meu Primerio Login
                                  </a>
                                </div>

                                <p style=""font-size:14px; color:#999999;"">
                                  Este e-mail foi enviado automaticamente. Por favor, não responda diretamente.
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td align=""center"" style=""background-color:#f0f0f0; padding:20px; font-size:12px; color:#777777;"">
                                &copy; 2025 Lightning Technologies · Todos os direitos reservados<br>
                                <a href=""https://www.lightning.tec.br"" style=""color:#007bff; text-decoration:none;"">www.lightning.tec.br</a>
                              </td>
                            </tr>

                          </table>
                        </td>
                      </tr>
                    </table>
                  </body>
                </html>
                ";
        }
        

        }

    
}

