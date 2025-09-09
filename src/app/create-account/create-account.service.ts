import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { UsuarioModel, Bairro } from "../app.model";
import { Observable } from "rxjs";


@Injectable({providedIn:'root'})
export class CreateAccountService{

    AppService = inject(AppService);
    http = inject(HttpClient);

     getBairros(cidadeFK:number):Observable<string>{
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer ' + this.AppService.usuarioAutenticado.token
            }),
            withCredentials : true,
          params : new HttpParams()
          .append('CidadeFk', cidadeFK)
          }
          return this.http
          .get<string>(`https://${this.AppService.apiDomain}/Bairro/get`,httpOptions)
      }
      postNewUser(user:UsuarioModel):Observable<string>{
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          }
          return this.http
          .post<string>(`https://${this.AppService.apiDomain}/Usuarios/post`,user,httpOptions)
      }
}