
import { Component, OnInit,inject } from '@angular/core';
import { AppService } from './app.service';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';
import { ENV_TYPE } from './app.enum';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   title = 'Gestao-Fotovoltaica';


   private intervaloStatus: any;
   readonly EnvironmentEnum = ENV_TYPE;

  http = inject(HttpClient);
  AppService = inject(AppService)

   ngOnInit(): void {
   
    this.setEnvironment();
    this.setApiUrlComplement();
  }
  


  ngOnDestroy(): void {
    if (this.intervaloStatus) {
      clearInterval(this.intervaloStatus);
    }
  }

  setEnvironment() {
  if (typeof window === 'undefined') return; 
  let domain = window.location.origin;
  if (domain.includes('localhost')) {
    this.AppService.environment = this.EnvironmentEnum.Local_Development;
    return;
  }
  if (domain.includes('dev')) {
    this.AppService.environment = this.EnvironmentEnum.Development;
    return;
  }
  this.AppService.environment = this.EnvironmentEnum.Production;
}


  setApiUrlComplement(){
    switch (this.AppService.environment){
      case this.EnvironmentEnum.Development:
        this.AppService.apiDomain = 'dev-api.gestaoFotovoltaica.com.br'
        break;
      case this.EnvironmentEnum.Local_Development:
        this.AppService.apiDomain = 'localhost:7012'
        break;
      case this.EnvironmentEnum.Production:
        this.AppService.apiDomain = 'api.gestaoFotovoltaica.com.br'
        break;
    }

  }

 

}