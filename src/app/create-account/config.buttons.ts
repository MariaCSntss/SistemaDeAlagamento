import { inject } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'

export class ConfigButtonsCreateAccount{

    _ButtonService = inject(lib.ButtonService);
    
  btnSolicitar(){
    let configModel = new lib.ButtonConfigModel({
      Name:'create-account-registrar',
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
            Text:'Registrar',
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
  btnVoltar(){
    let configModel = new lib.ButtonConfigModel({
      Name:'create-account-voltar',
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