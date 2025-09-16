import { Component, inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertComponent } from "../../alert/alert.component";
import { AppService } from '../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "lightning-tec-br-angular-components";
import { ConfigButtonsRegiao } from './config.buttons';
import { ButtonService } from 'lightning-tec-br-angular-components';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.css'],
  imports: [AlertComponent, CommonModule, ButtonComponent]
})
export class RegiaoComponent implements OnInit, OnDestroy {


  constructor (private route: ActivatedRoute, private buttonService: ButtonService, private ngZone: NgZone, private router: Router ) {}

  destroy = new Subject<void>();
  
  ngOnDestroy(): void {
    this.destroy.next();
  }
    
  nomeRegiaoUsuario = '';
  nomeRegiaoEsp = '';
  geocoder!: google.maps.Geocoder;
  distanciaMetros = 0;
  dados: any;
  mapa!: google.maps.Map;
  dispositivoId: number = 0;

  http = inject(HttpClient);
  AppService = inject(AppService);

  markerUsuario!: any;
  markerESP!: any;
  linha!: google.maps.Polyline;
  configButtons = new ConfigButtonsRegiao();
  probabilidade: number | null = null;


  ngOnInit(): void {

  this.startListenButtonClick();
  this.route.queryParams.subscribe((params) => {
    const lat = parseFloat(params['lat']);
    const lng = parseFloat(params['lng']);

    if (!isNaN(lat) && !isNaN(lng)) {
      this.inicializarMapa();
      this.buscarSensorMaisProximo(lat, lng);
    } else {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        this.inicializarMapa();
        this.buscarSensorMaisProximo(lat, lng);
      });
    }
  });

  setTimeout(()=>this.configButtons.btnVoltar(), 5);

}


startListenButtonClick(){
  this.buttonService.click.pipe(takeUntil(this.destroy)).subscribe(async (model) => {
  if(model.startsWith('voltar')){
   this.AppService.setButtonLaodingState('voltar',false);
  this.router.navigate(['/main']);
  }

  });

}

inicializarMapa() {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) {
    console.error('Elemento #map não encontrado!');
    return;
  }

  this.mapa = new google.maps.Map(mapDiv as HTMLElement, {
    center: { lat: 0, lng: 0 }, // centro temporário
    zoom: 2, // zoom temporário
    mapId: 'bf7d74e1b3d8abe39e15fb82'
  });

  this.geocoder = new google.maps.Geocoder();
}



  criarLabelPersonalizada(texto: string): HTMLElement {
  const div = document.createElement('div');
  div.style.padding = '4px 10px';
  div.style.backgroundColor = texto === 'Você' ? '#007bff' : '#28a745'; // azul ou verde
  div.style.color = 'white';
  div.style.borderRadius = '12px';
  div.style.fontSize = '12px';
  div.style.fontWeight = 'bold';
  div.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
  div.innerText = texto;
  return div;
}


  buscarSensorMaisProximo(lat: number, lng: number) {
    this.http.get<any>(`https://${this.AppService.apiDomain}/Localizacoes/mais-proximo?lat=${lat}&lng=${lng}`)
      .subscribe((res) => {
        this.nomeRegiaoEsp = res.nome;
        this.distanciaMetros = res.distanciaMetros;
         this.dispositivoId = res.dispositivoId; 
    this.http.get<any>(`https://${this.AppService.apiDomain}/Sensores/dados-sensores?dispositivoId=${this.dispositivoId}`)
        .subscribe((res) => {
          this.dados = res.sensores;
          this.probabilidade = res.probabilidadeAlagamento; 
          console.log("Retorno da API probabilidade:", this.probabilidade);
        });


        if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
        this.setNomeRegiaoUsuario(lat, lng);

        const sensorLat = Number(res.coordenadas.lat);
        const sensorLng = Number(res.coordenadas.lng);
        if (isNaN(sensorLat) || isNaN(sensorLng)) {
          console.error('Coordenadas inválidas:', res.coordenadas);
          return;
        }

const userPos = new google.maps.LatLng(lat, lng);
const espPos = new google.maps.LatLng(sensorLat, sensorLng);

const markerUsuario = new google.maps.marker.AdvancedMarkerElement({
  map: this.mapa,
  position: userPos,
  content: this.criarLabelPersonalizada('Você')
});

const markerESP = new google.maps.marker.AdvancedMarkerElement({
  map: this.mapa,
  position: espPos,
  content: this.criarLabelPersonalizada('ESP')
});

// Enquadrar os dois pontos no mapa
const bounds = new google.maps.LatLngBounds();
bounds.extend(userPos);
bounds.extend(espPos);
this.mapa.fitBounds(bounds);


if (!this.linha) {
  const lineSymbol = { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 2, strokeColor: '#FF0000' };
  this.linha = new google.maps.Polyline({
    path: [userPos, espPos],
    geodesic: true,
    strokeOpacity: 0,
    icons: [{ icon: lineSymbol, offset: '0', repeat: '20px' }],
    map: this.mapa
  });

  let count = 0;
  window.setInterval(() => {
    count = (count + 1) % 200;
    const icons = this.linha.get('icons');
    icons[0].offset = count / 2 + '%';
    this.linha.set('icons', icons);
  }, 50);
} else {
  this.linha.setPath([userPos, espPos]);
}

      });
  }

  formatarDistancia(m: number): string {
    return m >= 1000 ? (m / 1000).toFixed(2) + ' km' : m.toFixed(1) + ' m';
  }

  private extrairRegiao(results: google.maps.GeocoderResult[]): string {
    const prefer = (types: string[]) =>
      results.find(r => types.every(t => r.types.includes(t)))?.formatted_address;
    return (
      prefer(['sublocality', 'political']) ||
      prefer(['neighborhood', 'political']) ||
      prefer(['route']) ||
      results[0]?.formatted_address ||
      'Localização do usuário'
    );
  }

  private setNomeRegiaoUsuario(lat: number, lng: number) {
    this.geocoder.geocode({ location: { lat, lng } }, (results: any, status: string) => {
      if (status === 'OK' && results?.length) {
        this.nomeRegiaoUsuario = this.extrairRegiao(results);
      } else {
        this.nomeRegiaoUsuario = 'Localização do usuário';
        console.warn('Falha no geocoder:', status, results);
      }
    });
  }
}



