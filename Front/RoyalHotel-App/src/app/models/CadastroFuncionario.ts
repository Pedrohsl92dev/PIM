import { Endereco } from './Endereco';

export interface CadastroFuncionario {
  nome: string;
  cpf: string;
  telefone: string;
  celular: string;
  email: string;
  cargo: string;
  categoria: number;
  endereco: Endereco;
}
