import { Hospede } from './Hospede';

export interface Pedido {
  nomeProduto: string;
  valor: string;
  qtdProduto;
  valorTotal: string;
  hospede: Hospede;
}
