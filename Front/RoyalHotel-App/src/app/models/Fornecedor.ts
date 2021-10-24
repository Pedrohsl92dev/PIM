import { Endereco } from './Endereco';
import { Produto } from './Produto';

export interface Fornecedor {
  id: number;
  razaoSocial: string;
  cnpf: string;
  ie: string;
  produto: Produto[];
  endereco: Endereco;
}
