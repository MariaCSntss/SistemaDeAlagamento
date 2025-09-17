import { Component, inject, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertModel } from './alert.model';
import { AlertTypesEnum } from './alert.enum';
import * as lib from 'lightning-tec-br-angular-components';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {

  ngOnInit(){
    this.startListenToShow();
  }

  readonly IconsEnum = lib.IconsEnum;
  readonly AlerTypes = AlertTypesEnum;

  text:string='Por Favor insira um valor';
  type!:AlertTypesEnum;
  isVisible:boolean = false;
  Icon:string  = this.IconsEnum.Alert.toString();

  AlertService = inject(AlertService);

  startListenToShow(){
    this.AlertService.show.subscribe((model:AlertModel)=>{
      this.text = model.text;
      this.type = model.type;
      this.isVisible = model.visible;
      switch(this.type){
        case AlertTypesEnum.OK:
          this.Icon = lib.IconsEnum.Done_OutLine;
          break;
        case AlertTypesEnum.Alert:
          this.Icon = lib.IconsEnum.Alert;
        break;
        case AlertTypesEnum.Not_OK:
          this.Icon = lib.IconsEnum.NotDone;
        break;
      }
    })
  }

  closeClicked(){
    this.isVisible = false;
  }
}