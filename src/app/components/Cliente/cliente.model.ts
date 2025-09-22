export interface Cliente {
  cliId?: number;
  cliNome: string;
  cliCpf: string;
  cliRg?: string;
  cliDataNascimento?: string; // formato "yyyy-MM-dd" vindo do backend
  cliSexo: string;           // Ex: "M", "F"
  cliDataCadastro?: string;
  cliObservacoes?: string;
  cliAtivo?: string | boolean;
  endProprietario?: any;
  enderecos?: any[];
  contatos?: any[];
}
