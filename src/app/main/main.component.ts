import { Component, HostListener, inject, NgZone, OnDestroy } from '@angular/core';
import { AppService, WINDOW } from '../app.service';
import * as lib from 'lightning-tec-br-angular-components'
import { ConfigButtonsMain } from './configButton';
import { AlertService } from '../alert/alert.service';
import { AlertTypesEnum } from '../alert/alert.enum';
import { AlertModel } from '../alert/alert.model';
import { UsuarioModel } from '../app.model';
import { Router } from '@angular/router';
import { AlertComponent } from "../alert/alert.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { MainService } from './main.service';

declare const google: any;

@Component({
  selector: 'app-main',
  imports: [lib.ButtonComponent, AlertComponent, FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnDestroy {

 

  constructor(private router: Router, private ngZone: NgZone, private mainService: MainService) {}

  destroy = new Subject<void>();

  ngOnDestroy(): void {
   this.destroy.next();
  }

  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = this._window.innerWidth;
  }

  mostrarModal: boolean = false;
  selectedLocation: { lat: number, lng: number } | null = null;
  configButtons = new ConfigButtonsMain();
  AlertService = inject(AlertService);
  readonly AlertypesEnum = AlertTypesEnum;
  AlertModel!: AlertModel;
  _ButtonService = inject(lib.ButtonService);
  readonly ButtonTypes = lib.ButtonTypeEnum;
  readonly ButtonIconPositions = lib.ButtonIconPositionEnum;
  AppService = inject(AppService);
  _window = inject(WINDOW);



  mainMap!: google.maps.Map;
  modalMap!: google.maps.Map;
  marker!: google.maps.marker.AdvancedMarkerElement;
  autocompleteService!: any;
  geocoder!: any;
  mapa!: google.maps.Map;
  localizacaoAtual!: { lat: number; lng: number; };
 localSelecionado: { lat: any; lng: any } | null = null;

  desejaNotificacao: boolean = false;


  ngOnInit(): void {

      navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      this.mapa.setCenter({ lat, lng });
      this.localizacaoAtual = { lat, lng }; // salvar para uso futuro
    },
    (err) => {
      console.error("Erro ao obter localização:", err);
      alert("Não foi possível obter sua localização atual.");
    }
  );

    this.screenWidth = this._window.innerWidth;
    this.startListenToButtonClick();
    this.AlertModel = new AlertModel();

    setTimeout(() => this.configButtons.btnSeleacionarArea(), 5);
    setTimeout(() => this.configButtons.btnAreaSelecionada(), 5);
    setTimeout(() => this.configButtons.btnConfirmarArea(), 5);
  }


ngAfterViewInit(): void {
  setTimeout(() => {
    const mainMapDiv = document.getElementById('main-map');
    if (mainMapDiv) {
      this.initMainMap();
    }

    const input = document.getElementById('input-localizacao') as HTMLInputElement;
    if (input) {
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          alert("Endereço inválido.");
          return;
        }

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        this.localSelecionado = { lat, lng };
        this.modalMap.setCenter({ lat, lng });
        this.setMarker(lat, lng, `Lat: ${lat}<br>Lng: ${lng}`);
      });
    }
  }, 300);
}


  startListenToButtonClick() {
    this._ButtonService.click.pipe(takeUntil(this.destroy)).subscribe(async (model) => {
      if (model.startsWith('selecionarArea')) {
        this.AppService.setButtonLaodingState('selecionarArea', true);
        this.abrirInfo();
      }
      if (model.startsWith('areaSelecionada')) {
        this.AppService.setButtonLaodingState('areaSelecionada', true);
        this.abrirModalComMapa();
      }
      if (model.startsWith('confirmarArea')) {
        this.AppService.setButtonLaodingState('confirmarArea', true);
        this.onSelecionarOutraLocalizacao();
          const location = this.localSelecionado || this.selectedLocation;
if (location) {
  const { lat, lng } = location;
  this.router.navigate(['/regiao'], { queryParams: { lat, lng } });
}

      }
    });
  }

  toggleCheckBox(){
    const usuario = new UsuarioModel();
    this.desejaNotificacao = true;
    console.log(this.desejaNotificacao)
    this.EnviarNotificacao(usuario);
  }

  abrirInfo() {
    this.router.navigate(['/regiao']);
    setTimeout(() => {
      this.AppService.setButtonLaodingState('selecionarArea', false);
    }, 100);
  }

  abrirModalComMapa() {
    this.mostrarModal = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.initModalMap();
        });
      }, 100);
    });

    setTimeout(() => {
      this.AppService.setButtonLaodingState('areaSelecionada', false);
    }, 500);

  }

  fecharModal() {
    this.mostrarModal = false;
    setTimeout(() => {
      this.initMainMap();
    }, 100);
  }

  buscarLocal(endereco: string) {
  if (!endereco) return;

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: endereco }, (results: string | any[], status: string) => {
    if (status === 'OK' && results.length > 0) {
      const location = results[0].geometry.location;
      const lat = location.lat();
      const lng = location.lng();

      this.localSelecionado = { lat, lng };
      this.modalMap.setCenter({ lat, lng });
      this.modalMap.setZoom(16);

      // Remove marcador antigo
      if (this.marker) {
        (this.marker as google.maps.marker.AdvancedMarkerElement).map = null;
      }

      // Adiciona novo marcador
      this.marker = new google.maps.marker.AdvancedMarkerElement({
        map: this.modalMap,
        position: { lat, lng },
        title: endereco,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<b>${endereco}</b>`,
      });
      infoWindow.open(this.modalMap, this.marker);
    } else {
      alert('Endereço não encontrado.');
    }
  });
}


onSelecionarOutraLocalizacao() {
  this.mostrarModal = true;
  this.localSelecionado = null;

  setTimeout(() => {
    requestAnimationFrame(() => {
      const input = document.getElementById("input-localizacao") as HTMLInputElement;
      if (!input) return;

      // Listener para pressionar Enter
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          this.buscarLocal(input.value);
        }
      });

      // Listener para sair do campo
      input.addEventListener('blur', () => {
        this.buscarLocal(input.value);
      });
    });
  }, 300);
}




initMainMap(): void {
  const mapDiv = document.getElementById('main-map')!;
  this.mainMap = new google.maps.Map(mapDiv, {
    center: { lat: -15.7942, lng: -47.8822 }, // fallback
    zoom: 14,
  });

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      this.mainMap.setCenter({ lat, lng });

      new google.maps.Marker({
        position: { lat, lng },
        map: this.mainMap,
        label: 'Você',
      });

      this.localizacaoAtual = { lat, lng };
    },
    (error) => {
      console.error('Erro ao obter localização:', error.message);
    }
  );
}


  initModalMap(): void {
    const mapDiv = document.getElementById('modal-map')!;
    this.modalMap = new google.maps.Map(mapDiv as HTMLElement, {
      center: { lat: -15.7942, lng: -47.8822 },
      zoom: 13,
      mapId: 'bf7d74e1b3d8abe39e15fb82'
    });

    this.geocoder = new google.maps.Geocoder();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setMarker(latitude, longitude, 'Sua localização atual');
        this.modalMap.setCenter({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.warn('Erro ao obter localização:', error.message);
      }
    );

    this.modalMap.addListener('click', (e: any) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      console.log('Clique no mapa modal:', lat, lng);
      this.setMarker(lat, lng, `Lat: ${lat}<br>Lng: ${lng}`);
    });
  }

  setMarker(lat: number, lng: number, popup: string): void {
  if (this.marker) {
  (this.marker as google.maps.marker.AdvancedMarkerElement).map = null;
}

this.marker = new google.maps.marker.AdvancedMarkerElement({
  map: this.modalMap,
  position: { lat, lng }
});


    const infoWindow = new google.maps.InfoWindow({
      content: popup,
    });
    infoWindow.open(this.modalMap, this.marker);

    this.selectedLocation = { lat, lng };
  }


EnviarNotificacao(usuario: UsuarioModel) {
  const id = this.AppService.usuarioAutenticado?.usuarioID;

    console.log('ID:', id);

    console.log('Usuario autenticado:', this.AppService.usuarioAutenticado);

  if (!id) {
    this.AppService.MostrarAlerta('ID do usuário não encontrado', this.AlertypesEnum.Not_OK);
    return;
  }

  usuario.desejaNotificacao = this.desejaNotificacao;

  this.mainService.atualizarDesejarNotificacao(id, usuario.desejaNotificacao).subscribe({
    next: () => {
      this.AppService.MostrarAlerta('Você receberá informações via WhatsApp', this.AlertypesEnum.OK);
    },
    error: () => {
      this.AppService.MostrarAlerta('Não foi possível habilitar notificações', this.AlertypesEnum.Not_OK);
    }
  });
}



}




