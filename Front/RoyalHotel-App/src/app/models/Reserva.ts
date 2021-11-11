export interface Reserva {
  id: number;
  dataEntrada: Date;
  dataSaida: Date;
  qtdPessoas: number;
  statusPagamento: string;
  valorDiaria: number;
  valorTotal: number;
  categoriaApartamento: string;
  hospede_id: string;
  apartamento_id: string;
}
