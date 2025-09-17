export class UsuarioModel {
  usuarioID!: number;
  nomeCompleto!: string;
  email!: string;
  senha!: string;
  celular!: string;
  desejaNotificacao!: boolean;
  recebeuNotificacao!: number;

  autenticado: boolean = false;
  token!: string;

  consultaUsuarios?: ConsultaUsuarios[]; 

}

export class ConsultaUsuarios {
  id!: number;
  usuarioFK!: number;
  descricao!: string;
  latitude!: number;
  longitude!: number;


}

export class Localizacao {
  localizacaoID!: number;
  latitude!: number;
  longitude!: number;
  dataConsulta!: string;

  dispositivos?: Dispositivo[]; 
}

export class Dispositivo {
  dispositivoID!: number;
  nome!: string;
  localizacaoFK!: number;

  sensores?: Sensor[];
}

export class Sensor {
  sensorID!: number;
  dispositivoFK!: number;
  tipo!: string;
  unidadeMedida!: string;

  historico?: LeituraHistorico[];
}

export class LeituraHistorico {
  leituraHistID!: number;
  sensorFK!: number;
  valorMedido!: number;
  dataHoraLeitura!: string;

}
