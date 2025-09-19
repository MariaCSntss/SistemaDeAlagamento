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

  return this.http.put(`${this.AppService.apiDomain}/Usuarios/enviar-notificacao`, formData, httpOptions)
    }

enviarConsultaUsuario(usuarioID: string, latitude: number, longitude: number) {
  const dto = {
    usuarioId: Number(usuarioID),
    latitude: latitude,
    longitude: longitude
  };


//  this.http.post(`${this.AppService.apiDomain}/ConsultaUsuarioAlagamento/enviar`, dto)
  //  .subscribe({
    // error: (err) => console.error("❌ Erro ao enviar localização:", err)
  //  });
}


obterUsuario(usuarioId: number): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.AppService.usuarioAutenticado.token
    })
  };
  // Ajuste a rota conforme seu backend:
  return this.http.get<any>(`${this.AppService.apiDomain}/Usuarios/obter/${usuarioId}`, httpOptions);
}






}