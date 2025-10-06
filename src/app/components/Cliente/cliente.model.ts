export interface Contato {
  conCelular: string;
  conTelefoneComercial: string;
  conEmail: string;
}

export interface Endereco {
  endRua: string;
  endNumero: string;
  endCidade: string;
  endCep: string;
  endEstado: string;
}

export interface Cliente {
  cliId?: number;
  cliNome: string;
  cliCpf: string;
  cliRg?: string;
  cliDataNascimento?: string; // formato "yyyy-MM-dd" vindo do backend
  cliSexo: string;            // Ex: "M", "F"
  cliDataCadastro?: string;
  cliObservacoes?: string;
  cliAtivo?: string | boolean;
  endProprietario?: any;

  // 👇 agora com tipos definidos
  enderecos?: Endereco[];
  contatos?: Contato[];
}
