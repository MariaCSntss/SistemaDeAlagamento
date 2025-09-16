import { Component,HostListener,inject, OnDestroy, OnInit } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'
import { HttpHeaders,HttpClient, HttpParams } from '@angular/common/http';
import { AlertTypesEnum } from '../alert/alert.enum';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppService } from '../app.service';
import { UsuarioModel } from '../app.model';
import { WINDOW } from '../app.service';
import { AppValidations } from '../app.validations';
import { CreateAccountService } from './create-account.service';
import { Subject, takeUntil } from 'rxjs';
import { ConfigButtonsCreateAccount } from './config.buttons';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-create-account',
  imports: [lib.FormFieldComponent, lib.ButtonComponent, FormsModule, AlertComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnDestroy {
  
  constructor(private router : Router){}

  private destroy = new Subject<boolean>();
  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }

  
    ngOnInit(): void {
      this.screenWidth = this._window.innerWidth;
      this.startListenToTxtBox();
      this.startListenToButton();
      this.AppService.usuarioAutenticado = new UsuarioModel();
      setTimeout(()=>this.configButtons.btnSolicitar(),5);
      setTimeout(()=>this.configButtons.btnVoltar(),5);
    }
    screenWidth!:number;
    @HostListener('window:resize', ['$event'])
    onResize() {
      this.screenWidth = this._window.innerWidth;
    }

    readonly IconsEnum = lib.IconsEnum;
    readonly AlertTypesEnum = AlertTypesEnum;

    configButtons = new ConfigButtonsCreateAccount();

    FormFieldService = inject(lib.FormFieldService)
    readonly FormFieldCountryDataFormat = lib.FormFieldCountryDataFormat;
    readonly FormFieldFontWeights = lib.FormFieldFontWeights;
    readonly FormFieldTxtInputTypesEnum = lib.FormFieldTxtInputTypesEnum;
    readonly FormFieldTypes = lib.FormFieldTypes;

    empresaFK : number = 1;

    nome :string = '';
    nomeValido : boolean = false;
    nomeValidacaoVisible : boolean = false;
    nomeNCaracteres : number = 0;

    celular :string = '';
    celularValido : boolean = false;
    celularValidacaoVisible : boolean = false;
    celularNCaracteres : number = 0;

    email :string = '';
    emailValido : boolean = false;
    emailValidacaoVisible : boolean = false;
    emailNCaracteres : number = 0;

    senha :string = '';
    senhaValido_carac : boolean = false;
    senhaValido_maiuscula : boolean = false;
    senhaValido_minuscula : boolean = false;
    senhaValido_numero : boolean = false;
    senhaValido_caracEspecial : boolean = false;
    senhaValidacaoVisible : boolean = false;

    confirmSenha :string = '';
    confirmSenhaValido : boolean = false;
    confirmSenhaValidacaoVisible : boolean = false;


    validacoes = new AppValidations();
  
    loaderVisible : boolean = false;

    segundosParaReenviar : number = 60;
    popUpVisible : boolean = false;
  
    CreateAccountService = inject(CreateAccountService)
    _window = inject(WINDOW);
  
    _ButtonService = inject(lib.ButtonService)
    readonly ButtonTypes = lib.ButtonTypeEnum;
    readonly ButtonIconPositions = lib.ButtonIconPositionEnum;
  
    http = inject(HttpClient);
    AppService = inject(AppService);
  
    startListenToTxtBox() {
      this.FormFieldService.valueChanged.subscribe((formData)=>{
       switch (formData.name){
          case ('create-account-nome'):
            this.nomeValidacaoVisible = true;
            this.nomeNCaracteres = (formData.field as lib.FormFielTxtModel).value.length;
            this.nomeValido = this.validacoes.nomeValido((formData.field as lib.FormFielTxtModel).value)
            if(this.nomeValido){
              this.nome = (formData.field as lib.FormFielTxtModel).value;
            }else{
              this.nome = ''
            }
          break;
          case ('create-account-email'):
            this.emailValidacaoVisible = true;
            this.emailNCaracteres = (formData.field as lib.FormFielTxtModel).value.length;
            this.emailValido = this.validacoes.emailValido((formData.field as lib.FormFielTxtModel).value)
            if(this.emailValido){
              this.email = (formData.field as lib.FormFielTxtModel).value;
            }else{
              this.email = '';
            }
          break;
          case ('create-account-senha'):
            this.senhaValidacaoVisible = true;
            this.senhaValido_carac = this.validacoes.minimo8Max33((formData.field as lib.FormFielTxtModel).value)
            this.senhaValido_maiuscula = this.validacoes.umaLetraMaiuscula((formData.field as lib.FormFielTxtModel).value)
            this.senhaValido_minuscula = this.validacoes.umaLetraMinuscula((formData.field as lib.FormFielTxtModel).value)
            this.senhaValido_numero = this.validacoes.umNumero((formData.field as lib.FormFielTxtModel).value)
            this.senhaValido_caracEspecial = this.validacoes.umCaractereEspecial((formData.field as lib.FormFielTxtModel).value)
            if(this.senhaValido_carac &&
              this.senhaValido_maiuscula &&
              this.senhaValido_minuscula &&
              this.senhaValido_numero &&
              this.senhaValido_caracEspecial
            ){
              this.senha = (formData.field as lib.FormFielTxtModel).value;
            }else{
              this.senha = '';
            }
            this.confirmSenhaValido = this.senha == (formData.field as lib.FormFielTxtModel).value && this.senha != '' ? true : false;
          break;
          case ('create-account-confirmSenha'):
            this.confirmSenhaValidacaoVisible = true;
            this.confirmSenhaValido = this.senha == (formData.field as lib.FormFielTxtModel).value && this.senha != '' ? true : false;
          break;
          case ('create-account-celular'):
            this.celularValidacaoVisible = true;
            this.celularNCaracteres = (formData.field as lib.FormFielTxtModel).value.length;
            this.celularValido = this.validacoes.celularValido((formData.field as lib.FormFielTxtModel).value)
            if(this.celularValido){
              this.celular = (formData.field as lib.FormFielTxtModel).value;
            }else{
              this.celular = '';
            }
          break;
       }
      })
    }
  
    startListenToButton() {
      this._ButtonService.click.pipe(takeUntil(this.destroy)).subscribe((Button)=>{
       switch (Button){
         case ('create-account-registrar'):

            if(
              this.nome != '' &&
              this.email != '' &&
              this.senha != '' &&
              this.celular != '' 
              
            ){
              this.AppService.setButtonLaodingState('create-account-registrar',true);
              this.postNewUser();
              this.AppService.MostrarAlerta('Usuario adicionado, faça login',this.AlertTypesEnum.OK);

              
            }else{
              this.AppService.MostrarAlerta('Preencha todos os campos',this.AlertTypesEnum.Alert);
            }
           break;
          case ('create-account-voltar'):
            this.AppService.setButtonLaodingState('create-account-voltar',false);
            this.router.navigate(['/login']);
          break;
       }
  
      })
    }

    postNewUser(){
      let userModel = new UsuarioModel();
      userModel.nomeCompleto = this.nome;
      userModel.email = this.email;
      userModel.senha = this.senha;
      userModel.celular = this.celular;
      userModel.desejaNotificacao = false;
      userModel.recebeuNotificacao = 0;
     
this.AppService.setButtonLaodingState('create-account-registrar',false);
      this.CreateAccountService.postNewUser(userModel).pipe(takeUntil(this.destroy)).subscribe({
        next:(json)=>{
        },
        error:(err)=>{
          console.log(err);
          this.AppService.MostrarAlerta('Falha no servidor',this.AlertTypesEnum.Not_OK);
        }
      });
    }

  iniciarDecremento() {
    let timeoutId: any;
    const tick = () => {
      this.segundosParaReenviar--;
      if (this.segundosParaReenviar > 0) {
        timeoutId = setTimeout(tick, 1000);
      }else{
        window.close();
      }
    };
    timeoutId = setTimeout(tick, 1000);
    return () => clearTimeout(timeoutId);
  }



}
