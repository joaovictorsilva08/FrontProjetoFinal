export interface Cliente {
  cliId?: number;
  cliNome: string;
  cliCpf: string;
  cliRg?: string;
  cliDataNascimento?: Date | string;
  cliSexo?: string;
  cliDataCadastro?: Date | string;
  cliObservacoes?: string;
  cliAtivo?: string;
  endProprietario?: any;
  enderecos?: any[];
  contatos?: any[];
}
