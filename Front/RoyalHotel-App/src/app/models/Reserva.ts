import { Apartamento } from './Apartamento';
import { Hospede } from './Hospede';

export interface Reserva {
  id: number;
  dataEntrada: Date;
  dataSaida: Date;
  qtdPessoas: number;
  statusPagamento: string;
  tipoApartamento: string;
  hospede: Hospede;
  apartamento: Apartamento;
}
