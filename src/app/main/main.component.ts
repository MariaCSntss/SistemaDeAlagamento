import { Component, HostListener, inject, NgZone, OnDestroy } from '@angular/core';
import { AppService, WINDOW } from '../app.service';
import * as lib from 'lightning-tec-br-angular-components'
import { ConfigButtonsMain } from './configButton';
import { AlertTypesEnum } from '../alert/alert.enum';
import { UsuarioModel } from '../app.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { MainService } from './main.service';
import { FormFieldConfigs } from './config.formfields';
import { AppValidations } from '../app.validations';
import { ScreenService } from './screen.service';


declare const google: any;

@Component({
  selector: 'app-main',
  imports: [lib.ButtonComponent, FormsModule, CommonModule, lib.FormFieldComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnDestroy {

 

  constructor(private router: Router, private ngZone: NgZone, private mainService: MainService, private screen: ScreenService) {}

  destroy = new Subject<void>();

  ngOnDestroy(): void {
   this.destroy.next();
  }

  mostrarModal: boolean = false;
  selectedLocation: { lat: number, lng: number } | null = null;
  FormFieldService = inject(lib.FormFieldService);
  ButtonService = inject(lib.ButtonService);
  readonly AlertypesEnum = AlertTypesEnum;
  _ButtonService = inject(lib.ButtonService);
  readonly ButtonTypes = lib.ButtonTypeEnum;
  readonly ButtonIconPositions = lib.ButtonIconPositionEnum;
  AppService = inject(AppService);
  _window = inject(WINDOW);
  ButtonsConfigs = new ConfigButtonsMain();
  FormFieldConfigs = new FormFieldConfigs();
  validacoes = new AppValidations();

  mainMap!: google.maps.Map;
  modalMap!: google.maps.Map;
  marker!: google.maps.marker.AdvancedMarkerElement;
  autocompleteService!: any;
  geocoder!: any;
  mapa!: google.maps.Map;
  localizacaoAtual!: { lat: number; lng: number; };
 localSelecionado: { lat: any; lng: any } | null = null;

  desejaNotificacao: boolean = false;
  readonly IconsEnum = lib.IconsEnum;

  
asideIsVisible: boolean = false;
asideDisplayOn: boolean = false;

ViewWidth: number = 0;


clienteNome?: string = '';
clienteNomeValido: boolean = false;
clienteNomeValidacaoVisible: boolean = false;
clienteNomeNCaracteres: number = 0;
clienteNomeLenght: number = 0;

clienteSobrenome?: string = '';
clienteSobrenomeValido: boolean = false;
clienteSobrenomeValidacaoVisible: boolean = false;
clienteSobrenomeNCaracteres: number = 0;
clienteSobrenomeLenght: number = 0;
clienteValido: boolean = false;

celular?: string = '';
celularValido: boolean = false;
celularValidacaoVisible: boolean = false;
celularNCaracteres: number = 0;

email?: string = '';
emailValido: boolean = false;
emailValidacaoVisible: boolean = false;
emailNCaracteres: number = 0;

desejaNotificacaoConfirmado: boolean = false;
marcouCheckBox: boolean = false;


  ngOnInit(): void {

  this.ViewWidth = this.screen.getWidth();

  this.screen.width$.subscribe(width => {
    this.ViewWidth = width;
    this.configButtons(true);
  });

    navigator.geolocation.getCurrentPosition(
  (pos) => {
    console.log(
      "Latitude:", pos.coords.latitude,
      "Longitude:", pos.coords.longitude,
      "Precisão (m):", pos.coords.accuracy
    );
  },
  (err) => {
    console.error("Erro ao obter localização:", err);
    alert("Não foi possível obter sua localização atual.");
  },
  {
    enableHighAccuracy: true, // força GPS / Wi-Fi
    timeout: 10000,           // espera até 10s
    maximumAge: 0             // nunca usar cache
  }
);

    this.startListenToButtonClick();

    this.configButtons(true);
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

autocomplete.addListener("place_changed", () => {
  const place = autocomplete.getPlace();
  if (!place.geometry || !place.geometry.location) {
    alert("Endereço inválido.");
    return;
  }

  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();

  this.selectedLocation = { lat, lng };
  this.localSelecionado = { lat, lng };

  this.modalMap.setCenter({ lat, lng });
  this.setMarker(lat, lng, `Lat: ${lat}<br>Lng: ${lng}`);
});


    }
  }, 300);
}

@HostListener('window:resize')
onResize() {
  this.configButtons(true);
  this.configFormFields();
}

configButtons(force: boolean = false) {


  setTimeout(() => this.ButtonsConfigs.btnConfirmarArea(),5);
  setTimeout(() => this.ButtonsConfigs.btnSeleacionarArea(),5);
  setTimeout(() => this.ButtonsConfigs.btnAreaSelecionada(),5);
  setTimeout(() => this.ButtonsConfigs.btnVoltar(), 5);
  setTimeout(() =>this.ButtonsConfigs.criarCliente(true,false),5);
}

configFormFields() {

  setTimeout(() => this.FormFieldConfigs.createClienteNome(), 5);
  setTimeout(() => this.FormFieldConfigs.createClienteSobrenome(), 5);
  setTimeout(() => this.FormFieldConfigs.createClienteEmail(), 5);
  setTimeout(() => this.FormFieldConfigs.createClienteCelular(), 5);


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
          const location = this.localSelecionado || this.selectedLocation;
if (location) {
  const { lat, lng } = location;
  this.router.navigate(['/regiao'], { queryParams: { lat, lng } });
}

      }
      if (model.startsWith("criarCliente")) {
    this.criarCliente();
     }
    });
  }

  startListenToFormFieldChange() {
  this.FormFieldService.valueChanged
    .pipe(takeUntil(this.destroy))
    .subscribe((model: lib.FormFieldConfigModel) => {


      if (model.Name === 'createClienteNome') {
        this.clienteNomeValidacaoVisible = true;
        const value = model.Value;

        this.clienteNomeNCaracteres = Number((model.Value ?? '').length);
        this.clienteNomeLenght = Number((value ?? '').length);

        this.clienteNomeValido =
          this.validacoes.clienteNomeValido(model.Value ?? '');

        if ((value ?? '').trim().length > 0) {
          if (this.clienteNomeLenght > 0 && this.clienteNomeLenght <= 20) {
            this.clienteNome = value ?? '';
            this.clienteNomeValido = true;
          } else {
            this.clienteNome = '';
            this.clienteNomeValido = false;
          }
        }
      }

      if (model.Name === 'createClienteSobrenome') {
        this.clienteSobrenomeValidacaoVisible = true;

        const value = model.Value;

        this.clienteSobrenomeLenght = Number((value ?? '').length);
        this.clienteSobrenomeNCaracteres = Number((model.Value ?? '').length);

        this.clienteSobrenomeValido =
          this.validacoes.clienteSobrenomeValido(model.Value ?? '');

        if ((value ?? '').trim().length > 0) {
          if (this.clienteSobrenomeLenght > 0 && this.clienteSobrenomeLenght <= 30) {
            this.clienteSobrenome = value ?? '';
            this.clienteSobrenomeValido = true;
          } else {
            this.clienteSobrenome = '';
            this.clienteSobrenomeValido = false;
          }
        }
      }

      if (model.Name === 'createClienteCelular') {
        this.celularValidacaoVisible = true;

        this.celularNCaracteres = Number((model.Value ?? '').length);

        this.celularValido = this.validacoes.ClienteCelularValido(model.Value ?? '');

        if (this.celularValido) {
          this.celular = model.Value ?? '';
        } else {
          this.celular = '';
        }
      }

      if (model.Name === 'createClienteEmail') {
        this.emailValidacaoVisible = true;

        this.emailNCaracteres = Number((model.Value ?? '').length);

        this.emailValido =
          this.validacoes.clienteEmailValido(model.Value ?? '');

        if (this.emailValido) {
          this.email = model.Value ?? '';
        } else {
          this.email = '';
        }
      }

    });
}


toggleCheckBox() {
  this.marcouCheckBox = true;

  this.asideIsVisible = true;
  this.asideDisplayOn = true;

  this.configButtons(true);
  this.configFormFields();
  this.startListenToFormFieldChange();
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

  const input = document.getElementById("input-localizacao") as HTMLInputElement;
  if (!input) return;

  const listener = () => {
    this.buscarLocal(input.value);
  };

  input.removeEventListener('keydown', listener); 
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      listener();
    }
  });

  input.removeEventListener('blur', listener);
  input.addEventListener('blur', listener);
}

criarCliente() {

  if (!this.clienteNomeValido ||
      !this.clienteSobrenomeValido ||
      !this.emailValido ||
      !this.celularValido) {

    this.AppService.MostrarAlerta(
      "Preencha todos os campos corretamente!",
      this.AlertypesEnum.Not_OK
    );
    return;
  }

  const dto = {
    nomeCompleto: `${this.clienteNome} ${this.clienteSobrenome}`,
    email: this.email,
    celular: this.celular,
    desejaNotificacao: true
  };

  this.mainService.criarUsuario(dto).subscribe({
    next: (res: any) => {

      const usuarioId = res.usuarioId;
      if (!usuarioId) {
        this.AppService.MostrarAlerta("Erro ao criar usuário (ID indefinido).", this.AlertypesEnum.Not_OK);
        return;
      }

      // salva localmente
      localStorage.setItem("usuarioId", usuarioId.toString());

      // só ativa notificações após salvar user
      this.mainService.atualizarDesejaNotificacao(usuarioId, true)
        .subscribe({
          next: () => {

            this.desejaNotificacaoConfirmado = true;
             this.marcouCheckBox = false; 

            this.iniciarEnvioContinuoLocalizacao(usuarioId.toString());

            this.asideDisplayOn = false;
            this.asideIsVisible = false;

            this.AppService.MostrarAlerta(
              "Usuário criado e notificações ativadas!",
              this.AlertypesEnum.OK
            );
          },
          error: () => {
            this.AppService.MostrarAlerta(
              "Usuário criado, mas não foi possível ativar notificações.",
              this.AlertypesEnum.Not_OK
            );
          }
        });
    },
    error: (err) => {
      const msg = err?.error?.message || "";

      if (msg.includes("Email já cadastrado")) {
        this.AppService.MostrarAlerta("Email já cadastrado", this.AlertypesEnum.Not_OK);
        this.emailValido = false; 
        return;
      }

      if (msg.includes("Celular já cadastrado")) {
        this.AppService.MostrarAlerta("Celular já cadastrado!", this.AlertypesEnum.Not_OK);
        this.celularValido = false;
        return;
      }

      // erro genérico
      this.AppService.MostrarAlerta("Erro ao criar usuário.", this.AlertypesEnum.Not_OK);
    }

  });
}





initMainMap(): void {
  const mapDiv = document.getElementById('main-map')!;
 

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

  this.mainMap = new google.maps.Map(mapDiv, {
  center: { lat, lng },
  zoom: 14,
  mapId: 'bf7d74e1b3d8abe39e15fb82' 
});


      this.mainMap.setCenter({ lat, lng });

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat, lng },
        map: this.mainMap, 
        title: "Você"
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

iniciarEnvioContinuoLocalizacao(usuarioID: number): void {
  console.log("⏱️ Iniciando envio contínuo de localização para:", usuarioID);

  setInterval(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        this.mainService.enviarConsultaUsuario(usuarioID, lat, lng);
      },
      (error) => {
        console.error('❌ Erro ao obter localização:', error);
      },
      { enableHighAccuracy: true }
    );
  }, 60000);
}



EnviarNotificacao(usuario: UsuarioModel) {

      this.asideIsVisible = true;
        this.asideDisplayOn = true;
        this.configButtons(true);
        this.configFormFields()
  const id = this.AppService.usuarioAutenticado?.usuarioID;

  if (!id) {
    this.AppService.MostrarAlerta('ID do usuário não encontrado', this.AlertypesEnum.Not_OK);
    return;
  }

  usuario.desejaNotificacao = this.desejaNotificacao;

  this.mainService.atualizarDesejaNotificacao(id, usuario.desejaNotificacao).subscribe({
    next: () => {
      this.AppService.MostrarAlerta('Você receberá informações via WhatsApp', this.AlertypesEnum.OK);
      
      if (this.desejaNotificacao) {
        this.iniciarEnvioContinuoLocalizacao(usuario.usuarioID);
      }
    },
    error: () => {
      this.AppService.MostrarAlerta('Não foi possível habilitar notificações', this.AlertypesEnum.Not_OK);
    }
  });
}

  onAnimationEnd(event: AnimationEvent) {
  if (!this.asideIsVisible) this.asideDisplayOn = false;
}

 onClose() {
  this.asideIsVisible = false;
  this.asideDisplayOn = false;
  this.marcouCheckBox = false;
  this.configFormFields();
  this.clienteNomeNCaracteres = 0;
  this.clienteNomeValidacaoVisible = false;
  this.clienteSobrenomeNCaracteres = 0;
  this.clienteSobrenomeValidacaoVisible = false;
  this.emailNCaracteres = 0;
  this.emailValidacaoVisible = false;
  this.celularNCaracteres = 0;
  this.celularValidacaoVisible = false;

}


}




