import { Hospede } from './Hospede';

export interface Apartamento {
  id: number;
  nome: string;
  preco: number;
  dataInicio?: Date;
  dataFim?: Date;
  quantidade: number;
  hospedeId: number;
  hospede: Hospede;
}
