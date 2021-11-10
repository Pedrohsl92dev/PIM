import { Hospede } from './Hospede';

export interface Reserva {
  dataEntrada: Date;
  dataSaida: Date;
  qtdPessoas: number;
  statusPagamento: string;
  valorDiaria: number;
  valorTotal: number;
  hospede_id: string;
  categoria: string;
  apartamento_id: string;
  conta_id: string;
}
