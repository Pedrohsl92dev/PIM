import { Hospede } from './Hospede';

export interface Reserva {
  dataEntrada: Date;
  dataSaida: Date;
  qtdPessoas: number;
  statusPagamento: string;
  valorDiaria: number;
  valorTotal: number;
  hospede: string;
  categoria: string;
  apartamento: string;
}
