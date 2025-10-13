import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamento } from '../formapagamento.model';
import { formaPagamentoService } from '../formapagamento.service';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './formapagamento-update.component.html',  // confirme que o arquivo está aqui
  styleUrls: ['./formapagamento-update.component.css']   // confirme que o CSS está aqui
})
export class FormaPagamentoUpdateComponent implements OnInit {

  formaPagamento!: FormaPagamento;

  constructor(
    private formaPagamentoService: formaPagamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const formId = this.route.snapshot.paramMap.get('formId');
    if (formId) {
      this.formaPagamentoService.readById(formId).subscribe((fp: FormaPagamento) => {
        this.formaPagamento = fp;
      });
    }
  }

  salvarFormaPagamento(): void {
    this.formaPagamentoService.update(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento atualizada com sucesso!');
      this.router.navigate(['/formas-pagamento']);  // rota ajustada para lowercase e plural
    });
  }

  cancelarEdicaoFormaPagamento(): void {
    this.router.navigate(['/formas-pagamento']);   // mesma rota aqui
  }
}
