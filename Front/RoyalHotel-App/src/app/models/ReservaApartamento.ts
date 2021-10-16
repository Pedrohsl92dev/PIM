export interface ReservaApartamento {
  id: number;
  hospede: string;
  apartamento: string;
  dataEntrada: Date;
  dataSaida: Date;
  qtdPessoas: number;
  statusPagamento: string;
  tipoQuarto: string;
}
