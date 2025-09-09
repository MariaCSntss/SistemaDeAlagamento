import { inject } from '@angular/core';
import * as lib from 'lightning-tec-br-angular-components'

export class ConfigButtonsCreateAccount{

    _ButtonService = inject(lib.ButtonService);
    
  btnSolicitar(){
    let configModel = new lib.ButtonConfigModel({
      Name:'create-account-solicitar',
      Width:260,
      Height:44,
      ButtonType:lib.ButtonTypeEnum.Normal,
      BorderRadius:10,
      IconEnabled:false,
      Icon:lib.IconsEnum.Doing_Pending_Fill,
      IconFontSize:20,
      IconDistanceFromtext:5,
      IconColorNormal:'black',
      IconColorHover:'blue',
      IconOrientation:lib.ButtonIconPositionEnum.Left,
      TextEnabled:true,
      Text:'Solicitar',
      TextFontSize:14,
      TextFontWeight:lib.FontWeights.Regular,
      TextFontFamily:'Instrument_SansMedium',
      TextColorNormal:'white',
      TextColorHover:'white',
      BackGroundColorNormal:'var( --azulClaroVibrante)',
      BackGroundColorHover:'var(--hover)',
      LoadingState:false,
      EnabledState:true,
      OutlineBorderSize:2,
    });
    this._ButtonService.stateChanged.next(configModel);
  }
  btnVoltar(){
    let configModel = new lib.ButtonConfigModel({
      Name:'create-account-voltar',
      Width:260,
      Height:44,
      ButtonType:lib.ButtonTypeEnum.Outline,
      BorderRadius:10,
      IconEnabled:false,
      Icon:lib.IconsEnum.Doing_Pending_Fill,
      IconFontSize:20,
      IconDistanceFromtext:5,
      IconColorNormal:'black',
      IconColorHover:'blue',
      IconOrientation:lib.ButtonIconPositionEnum.Left,
      TextEnabled:true,
      Text:'Voltar',
      TextFontSize:14,
      TextFontWeight:lib.FontWeights.Regular,
      TextFontFamily:'Instrument_SansMedium',
      TextColorNormal:'var( --azulClaroVibrante)',
      TextColorHover:'var( --azulClaroVibrante)',
      BackGroundColorNormal:'var( --azulClaroVibrante)',
      BackGroundColorHover:'var(--hover)',
      LoadingState:false,
      EnabledState:true,
      OutlineBorderSize:2,
    });
    this._ButtonService.stateChanged.next(configModel);
  }

}