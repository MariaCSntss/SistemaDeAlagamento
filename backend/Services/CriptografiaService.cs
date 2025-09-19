namespace backend.Services
{
    public class CriptografiaService
    {
        public string Encriptar(string conteudo)
        {
            return BCrypt.Net.BCrypt.EnhancedHashPassword(conteudo, 14); // 8 a 31 de iterações

        }
        public bool autentificarCriptografia(string conteudoNaoCriptografado, string conteudoCriptografado)
        {
            return BCrypt.Net.BCrypt.EnhancedVerify(conteudoNaoCriptografado, conteudoCriptografado);
        }
    }
}
