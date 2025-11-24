export class AppValidations{

    public clienteNomeValido(nome :string) : boolean{
        const regex = /^[\p{L}\s]{2,20}$/u;
        return regex.test(nome)
    }
    public clienteSobrenomeValido(nome :string) : boolean{
        const regex = /^[\p{L}\s]{2,30}$/u;
        return regex.test(nome)
    }
    public clienteEmailValido(email :string) : boolean{
        const regex = /^(?=.{1,40}$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/u;
        return regex.test(email)
    }
    public ClienteCelularValido(celular :string) : boolean{
        return celular.length == 11 ? true : false;
    }
    public clienteBairroValido(nome :string) : boolean{
        const regex = /^[\p{L}\s]{2,20}$/u;
        return regex.test(nome)
    }
    public clienteRuaValido(nome :string) : boolean{
        const regex = /^[\p{L}\s]{2,40}$/u;
        return regex.test(nome)
    }
    public clienteNumeroValido(nome :string) : boolean{
        const regex = /^[\p{L}\s]{1,5}$/u;
        return regex.test(nome)
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