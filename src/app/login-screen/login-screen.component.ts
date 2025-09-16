import { Component,HostListener,inject, OnDestroy } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'
import { HttpHeaders,HttpClient, HttpParams } from '@angular/common/http';
import {AlertTypesEnum } from '../alert/alert.enum';
import {AlertModel } from '../alert/alert.model';
import {AlertService } from '../alert/alert.service';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { UsuarioModel } from '../app.model';
import { WINDOW } from '../app.service';
import { ConfigButtonsLogin } from './configButton';
import { AlertComponent } from "../alert/alert.component";
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-screen',
  imports: [ lib.FormFieldComponent, lib.ButtonComponent, AlertComponent],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css'
})
export class LoginScreenComponent implements OnDestroy {
  constructor(private router : Router){}

   destroy = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy.next();
  }

  ngOnInit(): void {

    this.screenWidth = this._window.innerWidth;

    this.startListenToTxtBox();
    this.startListenToButton();
    this.startListenToEnterPressed();
    this.AlertModel = new AlertModel();
    this.AppService.usuarioAutenticado = new UsuarioModel();

    setTimeout(()=>this.configButtons.btnLoginEntrar(),5);
    setTimeout(()=>this.configButtons.btnRegistro(),5);
  
  }
  screenWidth!:number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = this._window.innerWidth;
  }


  LoginEmail :string = '';
  LoginPassword : string = '';

  configButtons = new ConfigButtonsLogin();

  loaderVisible : boolean = false;
  AlertService = inject(AlertService);
  readonly AlertypesEnum = AlertTypesEnum;
  AlertModel! : AlertModel;

  _window = inject(WINDOW);

  readonly IconsEnum = lib.IconsEnum;

  FormFieldService = inject(lib.FormFieldService)
  readonly FormFieldCountryDataFormat = lib.FormFieldCountryDataFormat;
  readonly FormFieldFontWeights = lib.FormFieldFontWeights;
  readonly FormFieldTxtInputTypesEnum = lib.FormFieldTxtInputTypesEnum;
  readonly FormFieldTypes = lib.FormFieldTypes;

  _ButtonService = inject(lib.ButtonService)
  readonly ButtonTypes = lib.ButtonTypeEnum;
  readonly ButtonIconPositions = lib.ButtonIconPositionEnum;

  http = inject(HttpClient);
  AppService = inject(AppService);

  startListenToTxtBox() {
    this.FormFieldService.valueChanged.subscribe((formData)=>{
     switch (formData.name){
       case ('LoginEmail'):
         this.LoginEmail = (formData.field as lib.FormFielTxtModel).value;
         break;
         case ('LoginPassword'):
           this.LoginPassword = (formData.field as lib.FormFielTxtModel).value;
           break;
     }
    })
  }

  
  startListenToButton() {
    this._ButtonService.click.pipe(takeUntil(this.destroy)).subscribe((Button)=>{
     switch (Button){
       case ('LoginEntrar'):
         if(!this.emailOuSenhaVazios()){
            let config = new lib.ButtonConfigModel({
              Name: 'LoginEntrar',
              LoadingState:true
            })
            this._ButtonService.stateChanged.next(config);
           this.SubmmitLogin();
         }else{
          this.AppService.MostrarAlerta('Por favor, preencha os campos E-mail e Senha.',AlertTypesEnum.Alert);
         }
         break;

       case ('Registrar'):
            this.AppService.setButtonLaodingState('Registrar',true);
            this.router.navigate(['/create-account']);
          
        break;
     
     }

    })
  }


  startListenToEnterPressed(){

    this.FormFieldService.enterPressed.subscribe((FormFieldModel:lib.FormFieldModel)=>{
      if(FormFieldModel.name == "LoginPassword" || FormFieldModel.name == "LoginEmail"){
        if(!this.emailOuSenhaVazios()){
          let config = new lib.ButtonConfigModel({
            Name: 'LoginEntrar',
            LoadingState:true
          })
          this._ButtonService.stateChanged.next(config);
          this.SubmmitLogin();
        }else{
         this.AppService.MostrarAlerta('Por favor, preencha os campos E-mail e Senha.',AlertTypesEnum.Alert);
        }
      }
    });
  }

   emailOuSenhaVazios() : boolean{
    return this.LoginEmail == '' || this.LoginPassword == '' ? true : false;
   }
   



    SubmmitLogin(){

const body = {
  email: this.LoginEmail,
  senha: this.LoginPassword
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

this.http
  .post<any>(`https://${this.AppService.apiDomain}/Usuarios/post/login`, body, httpOptions)

.subscribe({
next: (json: any) => {
  this.AppService.setButtonLaodingState('LoginEntrar', false);

  if (!json || !json.data) {
    this.AppService.MostrarAlerta('Erro interno: resposta inesperada do servidor.', AlertTypesEnum.Not_OK);
    return;
  }

  this.AppService.usuarioAutenticado.autenticado   = true;
  this.AppService.usuarioAutenticado.usuarioID    = json.data.usuarioID;
  this.AppService.usuarioAutenticado.nomeCompleto = json.data.nomeCompleto;
  this.AppService.usuarioAutenticado.email        = json.data.email;
  this.AppService.usuarioAutenticado.celular      = json.data.celular;
  this.AppService.usuarioAutenticado.token        = json.data.token;

  this.router.navigate(['/main']);
},


    error: (err) => {
      this.AppService.MostrarAlerta(err.error.message, AlertTypesEnum.Not_OK);
      this._ButtonService.stateChanged.next(new lib.ButtonConfigModel({
        Name: 'LoginEntrar', LoadingState: false
      }));
    }
  });
}
}
