import {inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UsuarioModel } from "./app.model";
import { InjectionToken } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlertTypesEnum } from "./alert/alert.enum";
import { AlertModel } from "./alert/alert.model";
import { AlertService } from "./alert/alert.service";
import { ENV_TYPE } from "./app.enum";

export const WINDOW = new InjectionToken<Window>('WindowToken', {

  factory: () => {
    if(typeof window !== 'undefined') {
      return window
    }
    return new Window(); 
  }
});

@Injectable({providedIn:'root'})
export class AppService{

    constructor(private router : Router){}
    
    public AppVersion : string = 'v1.3.1'
    
    public AppIsOnline! : boolean;
    public usuarioAutenticado = new UsuarioModel();
    public environment! : ENV_TYPE;
    public apiDomain:string = '';

    private ButtonService = inject(lib.ButtonService);
    private FormFieldService = inject(lib.FormFieldService);
    private AlertService = inject(AlertService);

    http = inject(HttpClient);

    public resetUsuarioAutenticado(){
        this.usuarioAutenticado = new UsuarioModel();
    }
    public setButtonLaodingState(btnName : string, state:boolean){  
        this.ButtonService.stateChanged.next(new lib.ButtonConfigModel({
          Name : btnName,
          LoadingState: state
        }))
    }
   public MostrarAlerta(mensagem : string, tipo : AlertTypesEnum){
        var model = new AlertModel;
        model.text = mensagem;
        model.type = tipo;
        model.visible = true;
        this.AlertService.show.next(model);
   }
  public loadScreen(ScreenName : string){
    this.router.navigate(['/main'+ScreenName]);
  }

  public getTodayDateTime():string{
    var currentdate = new Date(); 
    var currentyear = currentdate.getFullYear();
    var currentMount = (currentdate.getMonth()+1) < 10 ? "0"+(currentdate.getMonth()+1).toString(): (currentdate.getMonth()+1);
    var currentDayOfMounth = currentdate.getDate() < 10 ? "0"+currentdate.getDate() : currentdate.getDate();
    var currentHour = currentdate.getHours() < 10 ? "0"+currentdate.getHours() : currentdate.getHours();
    var currentMinute = currentdate.getMinutes() < 10 ? "0"+currentdate.getMinutes() : currentdate.getMinutes();
    var currentSecond = currentdate.getSeconds() < 10 ? "0"+currentdate.getSeconds() : currentdate.getSeconds();
    var datetime =  currentyear + "-"
                    + currentMount   + "-" 
                    + currentDayOfMounth + "T"  
                    + currentHour + ":"  
                    + currentMinute+ ":" 
                    + currentSecond ;
    return datetime;
  }
    public getTodayDate():string{
    var currentdate = new Date(); 
    var currentyear = currentdate.getFullYear();
    var currentMount = (currentdate.getMonth()+1) < 10 ? "0"+(currentdate.getMonth()+1).toString(): (currentdate.getMonth()+1);
    var currentDayOfMounth = currentdate.getDate() < 10 ? "0"+currentdate.getDate() : currentdate.getDate();
    var date =  currentyear + "-"
                    + currentMount   + "-" 
                    + currentDayOfMounth
    return date;
  }

  public verifyIfAppIsOnline ():Observable<string>{
        const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
        }
        return this.http
        .get<string>("https://lhoist-api.lightning.tec.br/Ping/get/ApiIsOn",httpOptions)
    }


}