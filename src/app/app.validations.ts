export class AppValidations {

    public nomeValido(nome :string) : boolean{
        const regex = /^[\p{L}\s]{2,15}$/u;
        return regex.test(nome)
    }
    public sobrenomeValido(sobrenomne :string) : boolean{
        const regex = /^[\p{L}\s]{2,15}$/u;
        return regex.test(sobrenomne)
    }
    public emailValido(email :string) : boolean{
        const regex = /^(?=.{1,40}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/u;
        return regex.test(email)
    }
    public celularValido(celular :string) : boolean{
        return celular.length == 11 ? true : false;
    }
    public minimo8Max33(string :string) : boolean{
        const regex = /^.{8,33}$/u;
        return regex.test(string)
    }
    public umaLetraMaiuscula(string :string) : boolean{
        const regex = /^.*[A-Z].*/u;
        return regex.test(string)
    }
    public umaLetraMinuscula(string :string) : boolean{
        const regex = /^.*[a-z].*/u;
        return regex.test(string)
    }
    public umNumero(string :string) : boolean{
        const regex = /^.*[0-9].*/u;
        return regex.test(string)
    }
    public umCaractereEspecial(string :string) : boolean{
        const regex = /^.*[#?!@$%^&*-].*/u;
        return regex.test(string)
    }
}