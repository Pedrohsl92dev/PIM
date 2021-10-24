import { Fornecedor } from './Fornecedor';

export interface Produto {
  nome: string;
  quantidade: number;
  dataValidade: string;
  marca: string;
  valor: string;
  fornecedor: Fornecedor[];
}
