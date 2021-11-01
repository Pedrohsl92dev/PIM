import { Reserva } from './Reserva';

export interface Hospede {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  celular: string;
  email: string;
  reserva: Reserva;
  categoria: number;
  cidade: string;
  estado: string;
  cep: string;
  endereco: string;
  complemento: string;
}
