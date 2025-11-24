import { inject } from '@angular/core';
import { IconsEnum } from 'lightning-tec-br-angular-components';
import * as lib from 'lightning-tec-br-angular-components'

export class FormFieldConfigs{

    FormFieldService = inject(lib.FormFieldService);

  setValueTo(name:string,value:string){
    let configModel = new lib.FormFieldConfigModel({
        Name: name,
        Value: value
    });
    this.FormFieldService.stateChanged.next(configModel);
  }

  createClienteNome(){
    let configModel = new lib.FormFieldConfigModel({
        Name:'createClienteNome',
        Width:260,
        Height:44,
        FieldType:lib.FormFieldTypes.TxtBox,
        ComboValues:['item0','item02'],
        ComboIds:[1,2],
        Value:'',
        IconEnabled:true,
        Icon:IconsEnum.User,
        IconColor:'var(--azul)',
        FontSize:14,
        FontColor:'var(--azul)',
        FontWeight:lib.FontWeights.Regular,
        FontFamily:'roboto',
        TxtInputType:lib.FormFieldTxtInputTypesEnum.Text,
        PlaceHolderValue:'Ex: Matheus',
        NumberMaskPrefix:'',
        NumberMaskSufix:'',
        NCasasDecimais:0,
        CountryDataFormat:lib.FormFieldCountryDataFormat.Brasil,
        Border:'',
        BorderRadius:5,
        BoxShadowsEnabled:true,
    });
    this.FormFieldService.stateChanged.next(configModel);
  }
    createClienteSobrenome(){
    let configModel = new lib.FormFieldConfigModel({
        Name:'createClienteSobrenome',
        Width:260,
        Height:44,
        FieldType:lib.FormFieldTypes.TxtBox,
        ComboValues:['item0','item02'],
        ComboIds:[1,2],
        Value:'',
        IconEnabled:true,
        Icon:IconsEnum.User,
        IconColor:'var(--azul)',
        FontSize:14,
        FontColor:'var(--azul)',
        FontWeight:lib.FontWeights.Regular,
        FontFamily:'roboto',
        TxtInputType:lib.FormFieldTxtInputTypesEnum.Text,
        PlaceHolderValue:'Ex: Matheus',
        NumberMaskPrefix:'',
        NumberMaskSufix:'',
        NCasasDecimais:0,
        CountryDataFormat:lib.FormFieldCountryDataFormat.Brasil,
        Border:'',
        BorderRadius:5,
        BoxShadowsEnabled:true,
    });
    this.FormFieldService.stateChanged.next(configModel);
  }
  createClienteEmail(){
    let configModel = new lib.FormFieldConfigModel({
        Name:'createClienteEmail',
        Width:260,
        Height:44,
        FieldType:lib.FormFieldTypes.TxtBox,
        ComboValues:['item0','item02'],
        ComboIds:[1,2],
        Value:'',
        IconEnabled:true,
        Icon:IconsEnum.User,
        IconColor:'var(--azul)',
        FontSize:14,
        FontColor:'var(--azul)',
        FontWeight:lib.FontWeights.Regular,
        FontFamily:'roboto',
        TxtInputType:lib.FormFieldTxtInputTypesEnum.Email,
        PlaceHolderValue:'Ex: nome@email.com',
        NumberMaskPrefix:'',
        NumberMaskSufix:'',
        NCasasDecimais:0,
        CountryDataFormat:lib.FormFieldCountryDataFormat.Brasil,
        Border:'',
        BorderRadius:5,
        BoxShadowsEnabled:true,
    });
    this.FormFieldService.stateChanged.next(configModel);
  }
  createClienteCelular(){
    let configModel = new lib.FormFieldConfigModel({
        Name:'createClienteCelular',
        Width:260,
        Height:44,
        FieldType:lib.FormFieldTypes.TxtBox,
        ComboValues:['item0','item02'],
        ComboIds:[1,2],
        Value:'',
        IconEnabled:true,
        Icon:IconsEnum.Phone,
        IconColor:'var(--azul)',
        FontSize:14,
        FontColor:'var(--azul)',
        FontWeight:lib.FontWeights.Regular,
        FontFamily:'roboto',
        TxtInputType:lib.FormFieldTxtInputTypesEnum.CellPhone,
        PlaceHolderValue:'',
        NumberMaskPrefix:'',
        NumberMaskSufix:'',
        NCasasDecimais:0,
        CountryDataFormat:lib.FormFieldCountryDataFormat.Brasil,
        Border:'',
        BorderRadius:5,
        BoxShadowsEnabled:true,
    });
    this.FormFieldService.stateChanged.next(configModel);
  }


}