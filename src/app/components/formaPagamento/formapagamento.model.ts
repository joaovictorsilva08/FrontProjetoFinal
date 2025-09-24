export interface FormaPagamento {
  formId?: number;
  formDescricao: string;
  formTipo: string;
  formNumeroParcelas?: number | null;
  formDiasEntreParcelas?: number | null;
  formPermiteTroco: boolean;
  formTaxaPercentual?: number | null;
  formAtivo: boolean;
}
