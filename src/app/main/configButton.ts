import { inject } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'

export class ConfigButtonsMain{

    _ButtonService = inject(lib.ButtonService);

  btnSeleacionarArea(){
        let configModel = new lib.ButtonConfigModel({
            Name:'selecionarArea',
            Width:350,
            Height:40,
            ButtonType: lib.ButtonTypeEnum.Normal,
            BorderRadius:5,
            IconEnabled:false,
            Icon:lib.IconsEnum.EyeClose,
            IconFontSize:20,
            IconDistanceFromtext:5,
            IconColorNormal:'white',
            IconColorHover:'white',
            IconOrientation: lib.ButtonIconPositionEnum.Left,
            TextEnabled:true,
            Text:'Manter localização atual',
            TextFontSize:20,
            TextFontWeight: 600,
            TextFontFamily:'CoreFont',
            TextColorNormal:'white',
            TextColorHover:'white',
            BackGroundColorNormal:'var(--logo)',
            BackGroundColorHover:'var(--logo)',
            LoadingState:false,
            EnabledState:true,
            OutlineBorderSize:2,
     });
    this._ButtonService.stateChanged.next(configModel);
  }


   btnAreaSelecionada(){
        let configModel = new lib.ButtonConfigModel({
            Name:'areaSelecionada',
            Width:352,
            Height:40,
            ButtonType: lib.ButtonTypeEnum.Normal,
            BorderRadius:5,
            IconEnabled:false,
            Icon:lib.IconsEnum.EyeClose,
            IconFontSize:20,
            IconDistanceFromtext:5,
            IconColorNormal:'white',
            IconColorHover:'white',
            IconOrientation: lib.ButtonIconPositionEnum.Left,
            TextEnabled:true,
            Text:'Selecionar nova localizacao ',
            TextFontSize:20,
            TextFontWeight: 600,
            TextFontFamily:'CoreFont',
            TextColorNormal:'white',
            TextColorHover:'white',
            BackGroundColorNormal:'var(--logo)',
            BackGroundColorHover:'var(--logo)',
            LoadingState:false,
            EnabledState:true,
            OutlineBorderSize:2,
     });
    this._ButtonService.stateChanged.next(configModel);
  }

  btnConfirmarArea(){
        let configModel = new lib.ButtonConfigModel({
            Name:'confirmarArea',
            Width:252,
            Height:40,
            ButtonType: lib.ButtonTypeEnum.Normal,
            BorderRadius:5,
            IconEnabled:false,
            Icon:lib.IconsEnum.EyeClose,
            IconFontSize:20,
            IconDistanceFromtext:5,
            IconColorNormal:'white',
            IconColorHover:'white',
            IconOrientation: lib.ButtonIconPositionEnum.Left,
            TextEnabled:true,
            Text:'Confirmar localização',
            TextFontSize:20,
            TextFontWeight: 600,
            TextFontFamily:'CoreFont',
            TextColorNormal:'white',
            TextColorHover:'white',
            BackGroundColorNormal:'var(--logo)',
            BackGroundColorHover:'var(--logo)',
            LoadingState:false,
            EnabledState:true,
            OutlineBorderSize:2,
     });
    this._ButtonService.stateChanged.next(configModel);
  }
  
   criarCliente(isEnable:boolean,isLoading:boolean){
  let configModel = new lib.ButtonConfigModel({
      Name:'criarCliente',
      Width: 130,
      Height:35,
      ButtonType:lib.ButtonTypeEnum.Normal,
      BorderRadius:10,
      AlignItems: 'center',
      JustifyContent:'flex-start',
      Padding:'0px 20px',
      IconEnabled:true,
      Icon: lib.IconsEnum.Add,
      IconFontSize:16,
      IconDistanceFromtext:10,
      IconColorNormal:'white',
      IconColorHover:'white',
      IconOrientation:lib.ButtonIconPositionEnum.Left,
      TextEnabled:true,
      Text: 'Adicionar',
      TextFontSize:14,
      TextFontWeight:lib.FontWeights.Regular,
      TextFontFamily:'roboto',
      TextColorNormal:'white',
      TextColorHover:'white',
      BackGroundColorNormal:'var( --azul)',
      BackGroundColorHover:'var(--hover)',
      LoadingState:isLoading,
      EnabledState:isEnable,
      OutlineBorderSize:2,
    });
    this._ButtonService.stateChanged.next(configModel);
  }

    btnVoltar(){
    let configModel = new lib.ButtonConfigModel({
            Name:'voltar',
           Width:44,
            Height:40,
            ButtonType: lib.ButtonTypeEnum.Normal,
            BorderRadius:5,
            IconEnabled:true,
            Icon:lib.IconsEnum.Home,
            IconFontSize:20,
            IconDistanceFromtext:5,
            IconColorNormal:'white',
            IconColorHover:'white',
            IconOrientation: lib.ButtonIconPositionEnum.Right,
            TextEnabled:false,
            Text:'Voltar',
            TextFontSize:18,
            TextFontWeight: 600,
            TextFontFamily:'CoreFont',
            TextColorNormal:'white',
            TextColorHover:'white',
            BackGroundColorNormal:'var(--logo)',
            BackGroundColorHover:'var(--logo)',
            LoadingState:false,
            EnabledState:true,
            OutlineBorderSize:2,
    });
    this._ButtonService.stateChanged.next(configModel);
  }
 
   
}