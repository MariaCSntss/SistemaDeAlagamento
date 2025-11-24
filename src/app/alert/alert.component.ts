import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
export class AlertComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(){
    this.startListenToShow();
  }

  readonly IconsEnum = lib.IconsEnum;
  readonly AlerTypes = AlertTypesEnum;

  text:string='Por Favor insira um valor';
  type!:AlertTypesEnum;
  isVisible:boolean = false;
  Icon:string  = this.IconsEnum.Alert.toString();
  progressBar :string = '';
  interval :any;

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
      this.progressBar = '100%';
      this.startProgressBarTimer();
    })
  }
  closeClicked(){
    this.isVisible = false;
    clearInterval(this.interval);
  }

  startProgressBarTimer(){
    let percent = 100;
    this.interval = setInterval(()=>{
      percent = percent - (20/this.text.length);
      this.progressBar = percent+'%';
      if(percent<=0) this.closeClicked();
    },50)
  }
}
