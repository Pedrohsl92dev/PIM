import { Hospede } from './Hospede';

export interface Reserva {
  dataEntrada: Date;
  dataSaida: Date;
  qtdPessoas: number;
  statusPagamento: string;
  hospede: Hospede;
  apartamento: string;
}
