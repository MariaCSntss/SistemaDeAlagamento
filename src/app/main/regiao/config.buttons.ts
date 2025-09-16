import { inject } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'

export class ConfigButtonsRegiao{

    _ButtonService = inject(lib.ButtonService);
    
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