export class UsuarioModel {
  usuarioID!: number;
  nomeCompleto!: string;
  email!: string;
  senha!: string;
  celular!: string;

  autenticado: boolean = false;
  token!: string;
}

export class Localizacao {
  localizacaoID!: number;
  descricao!: string;
  latitude!: number;
  longitude!: number;

  dispositivos?: Dispositivo[]; 
}

export class Dispositivo {
  dispositivoID!: number;
  nome!: string;
  localizacaoID!: number;

  sensores?: Sensor[];
}

export class Sensor {
  sensorID!: number;
  dispositivoID!: number;
  tipo!: string;
  unidadeMedida!: string;

  historico?: LeituraHistorico[];
}

export class LeituraHistorico {
  leituraHistID!: number;
  sensorID!: number;
  valorMedido!: number;
  dataHoraLeitura!: string;

  latitudeUsuario?: number;
  longitudeUsuario?: number;
}
