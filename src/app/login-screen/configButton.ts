import { inject } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'

export class ConfigButtonsLogin{

    _ButtonService = inject(lib.ButtonService);

  btnLoginEntrar(){
        let configModel = new lib.ButtonConfigModel({
            Name:'LoginEntrar',
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
            Text:'Entrar',
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

    btnRegistro(){
        let configModel = new lib.ButtonConfigModel({
            Name:'Registrar',
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
            Text:'Fazer Cadastro',
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