import { Hospede } from './Hospede';

export interface RegistrarPedido {
  nomeProduto: string;
  valor: string;
  qtdProduto;
  valorTotal: string;
  hospede: Hospede;
}
