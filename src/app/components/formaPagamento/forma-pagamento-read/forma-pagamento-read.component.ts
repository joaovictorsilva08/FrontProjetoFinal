// forma-pagamento-read.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormaPagamento } from '../formapagamento.model';  // ajuste caminho
import { FormapagamentoService } from '../formapagamento.service'; // ajuste caminho

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {
  formapagamentos: FormaPagamento[] = [];
  displayedColumns: string[] = [
    'formId',
    'formDescricao',
    'formTipo',
    'formNumeroParcelas',
    'formDiasEntreParcelas',
    'formTaxaPercentual',
    'formPermiteTroco',
    'formAtivo',
    'actions'
  ];

  constructor(
    private formaPagamentoService: FormapagamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFormasPagamento();
  }

  loadFormasPagamento(): void {
    this.formaPagamentoService.read().subscribe({
      next: data => this.formapagamentos = data,
      error: err => console.error('Erro ao carregar formas de pagamento', err)
    });
  }

  editarFormaPagamento(id: string): void {
    // Navega para a rota de edição, usando id
    this.router.navigate(['/formapagamentos/update', id]);
  }

  deletarFormaPagamento(id: string): void {
    if (confirm('Deseja realmente deletar esta forma de pagamento?')) {
      this.formaPagamentoService.delete(+id).subscribe({
        next: () => this.loadFormasPagamento(), // recarrega a lista após exclusão
        error: err => console.error('Erro ao deletar forma de pagamento', err)
      });
    }
  }
}
