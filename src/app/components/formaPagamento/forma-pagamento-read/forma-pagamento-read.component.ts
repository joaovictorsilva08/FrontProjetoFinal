import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../formapagamento.model';
import { FormapagamentoService } from '../formapagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  formapagamentos: FormaPagamento[] = [];

  displayedColumns: string[] = ['formId','formDescricao','formTipo','formNumeroParcelas','formDiasEntreParcelas','formTaxaPercentual','formPermiteTroco','formAtivo','actions'
  ];

  constructor(private formaPagamentoService: FormapagamentoService) {}

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formapagamentos => {
      this.formapagamentos = formapagamentos;
    });
  }
}
