import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class MainService {

  AppService = inject(AppService);
  http = inject(HttpClient);

  criarUsuario(dto: any): Observable<any> {
    return this.http.post(`${this.AppService.apiDomain}/Usuarios/post`, dto);
  }

  atualizarDesejaNotificacao(usuarioId: number, deseja: boolean): Observable<any> {
    const formData = new FormData();
    formData.append("usuarioId", usuarioId.toString());
    formData.append("desejaNotificacao", deseja.toString());

    return this.http.put(
      `${this.AppService.apiDomain}/Usuarios/enviar-notificacao`,
      formData
    );
  }

  enviarConsultaUsuario(usuarioId: number, latitude: number, longitude: number): Observable<any> {
    const dto = {
      usuarioId,
      latitude,
      longitude
    };

    return this.http.post(
      `${this.AppService.apiDomain}/ConsultaUsuarioAlagamento/enviar`,
      dto
    );
  }


}
