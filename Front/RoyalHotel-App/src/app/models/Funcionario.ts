import { Endereco } from './Endereco';

export interface Fornecedor {
  nome: string;
  cpf: string;
  categoria: string;
  endereco: Endereco;
}
