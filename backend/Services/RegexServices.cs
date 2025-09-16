using DocumentFormat.OpenXml.Office2016.Drawing.ChartDrawing;
using System.Net.Mail;
using System.Text.RegularExpressions;

namespace backend.Services
{
    public class RegexServices
    {
        public bool emailValido(string email)
        {
            try
            {
                string address = new MailAddress(email).Address;
                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }
        public bool senhaValida(string senha)
        {

            return Regex.IsMatch(senha, "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,33}$") ? true : false;
        }
        public bool apenasNumerosValido(string celular, int numeroMaxDeCaracteres)
        {
            return Regex.IsMatch(celular, "^[0-9]{1," + numeroMaxDeCaracteres.ToString() + "}$") ? true : false;
        }
        public bool apenasTextoValido(string texto, int numeroMaxDeCaracteres)
        {
            return Regex.IsMatch(texto, @"^[\p{L}\s]{2," + numeroMaxDeCaracteres + "}$");
        }
        public bool textoComTraçosValido(string texto, int numeroMaxDeCaracteres)
        {
            return Regex.IsMatch(texto, @"^[\p{L}\s\-_]{1," + numeroMaxDeCaracteres + "}$");
        }
        public bool textocomNumeroValido(string texto, int numeroMaxDeCaracteres)
        {
            return Regex.IsMatch(texto, @"^[\p{L}\d\s]{1," + numeroMaxDeCaracteres + "}$");
        }
        public bool textocomNumeroCaractereEspecialValido(string texto, int numeroMaxDeCaracteres)
        {
            return Regex.IsMatch(texto, @"^[\p{L}\d\s.,;:!?@#$%&*()\-_]{1," + numeroMaxDeCaracteres + "}$");
        }

    }
}
