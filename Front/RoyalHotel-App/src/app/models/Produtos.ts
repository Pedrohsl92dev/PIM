import { Fornecedor } from './Fornecedor';

export interface Produtos {
  id: number;
  nome: string;
  quantidade: number;
  dataValidade: string;
  marca: string;
  valor: string;
  fornecedor: Fornecedor[];
}
