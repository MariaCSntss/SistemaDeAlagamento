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

   
}