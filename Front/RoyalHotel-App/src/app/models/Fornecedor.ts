import { Produtos } from './Produtos';

export interface Fornecedor {
  id: number;
  razaoSocial: string;
  cnpf: string;
  endereco: string;
  cidade: string;
  estado: string;
  ie: string;
  produto: Produtos[];
}
