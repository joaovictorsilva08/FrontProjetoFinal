import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../formapagamento.model';
import { FormapagamentoService } from '../formapagamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit {

  formapagamento: FormaPagamento = {
    formDescricao: '',
    formTipo: '',
    formNumeroParcelas: null,          // Inicializado para evitar erro TS
    formDiasEntreParcelas: null,       // Inicializado para evitar erro TS
    formTaxaPercentual: null,
    formPermiteTroco: false,
    formAtivo: true
  };

  constructor(
    private formapagamentoService: FormapagamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // Controle para exibir campos de parcelas
  isCreditoOuParcelado(): boolean {
    return this.formapagamento.formTipo === 'Crédito' || this.formapagamento.formTipo === 'Parcelado';
  }

  createFormaPagamento(): void {
    this.formapagamentoService.create(this.formapagamento).subscribe(() => {
      this.formapagamentoService.showMessage('Forma de Pagamento criada com sucesso!');
      this.router.navigate(['/formapagamento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/formapagamento']);
  }
}
