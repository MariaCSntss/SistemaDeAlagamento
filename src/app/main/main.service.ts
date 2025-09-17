import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class MainService{

    AppService = inject(AppService);
    http = inject(HttpClient);


    atualizarDesejarNotificacao(usuarioId:number, desejaNotificacao:boolean): Observable<any> {
 
        const formData = new FormData();

        formData.append('usuarioId', usuarioId.toString());
        formData.append('desejaNotificacao', desejaNotificacao.toString())

          const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.AppService.usuarioAutenticado.token
    })
  };

  return this.http.put(`https://${this.AppService.apiDomain}/Usuarios/enviar-notificacao`, formData, httpOptions)
    }

}