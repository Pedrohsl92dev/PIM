import { Conta } from './Conta';
import { Endereco } from './Endereco';
import { Pedido } from './Pedido';
import { Reserva } from './Reserva';

export interface Hospede {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  celular: string;
  email: string;
  reserva: Reserva;
  pedido: Pedido;
  conta: Conta;
  endereco: Endereco;
}
