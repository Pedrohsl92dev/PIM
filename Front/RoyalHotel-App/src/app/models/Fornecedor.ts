import { Produto } from './Produto';

export interface Fornecedor {
  id: number;
  razaoSocial: string;
  cnpf: string;
  ie: string;
  produto: Produto[];
  cidade: string;
  estado: string;
  cep: string;
  endereco: string;
  complemento: string;
}
