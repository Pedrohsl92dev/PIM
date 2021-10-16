export interface ReservaDashboard {
  id: number;
  primeiroNome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  celular: string;
  dataEntrada: Date;
  dataSaida: Date;
  qtdAdultos: number;
  qtdCriancas: number;
  qtdApartamentos: number;
  cpf: string;
  categoria: number;
}
