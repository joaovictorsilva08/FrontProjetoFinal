import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../Cliente/cliente.service';
import { formaPagamentoService } from '../formaPagamento/formapagamento.service';
import { EstudioService } from '../Estudio/estudio.service';
import { ProdutoService } from '../Produto/produto.service';

interface Reserva {
  cliente: string;
  estudio: string;
  data: string;
  horario: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  
})
export class InicioComponent implements OnInit {

  reservasAtivas = 0; // ✅ alterado para iniciar com 0
  clientesCadastrados = 0;
  estudiosDisponiveis = 0;
  produtosCadastrados = 0;
  formasPagamento = 0;

  proximasReservas: Reserva[] = [
    { cliente: 'João Silva', estudio: 'Estúdio A', data: '25/09/2025', horario: '14:00' },
    { cliente: 'Maria Souza', estudio: 'Estúdio B', data: '26/09/2025', horario: '09:00' },
    { cliente: 'Carlos Lima', estudio: 'Estúdio C', data: '27/09/2025', horario: '16:30' },
  ];

  reservasPorMes = [
    { name: 'Jan', value: 5 },
    { name: 'Fev', value: 8 },
    { name: 'Mar', value: 4 },
    { name: 'Abr', value: 7 },
    { name: 'Mai', value: 10 },
    { name: 'Jun', value: 6 }
  ];

  view: [number, number] = [600, 300];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private clienteService: ClienteService,
    private formapagamentoService: formaPagamentoService,
    private estudioService: EstudioService,
    private produtoService: ProdutoService,
  ) {}

  ngOnInit(): void {
    this.loadClientesCount();
    this.loadFormasPagamentoCount();
    this.loadEstudiosDisponiveisCount();
    this.loadProdutosCount();
  }

  loadClientesCount(): void {
    this.clienteService.count().subscribe({
      next: (count) => this.clientesCadastrados = count,
      error: () => {
        this.clientesCadastrados = 0;
        console.error('Erro ao carregar quantidade de clientes');
      }
    });
  }

  loadFormasPagamentoCount(): void {
    this.formapagamentoService.read().subscribe({
      next: (formas) => {
        this.formasPagamento = formas.length;
      },
      error: (err) => {
        this.formasPagamento = 0;
        console.error('Erro ao carregar formas de pagamento', err);
      }
    });
  }

  loadEstudiosDisponiveisCount(): void {
    this.estudioService.count().subscribe({
      next: (count) => this.estudiosDisponiveis = count,
      error: (err) => {
        this.estudiosDisponiveis = 0;
        console.error('Erro ao carregar estúdios disponíveis', err);
      }
    });
  }

  loadProdutosCount(): void {
    this.produtoService.count().subscribe({
      next: (count) => this.produtosCadastrados = count,
      error: (err) => {
        this.produtosCadastrados = 0;
        console.error('Erro ao carregar produtos cadastrados', err);
      }
    });
  }




  criarReservaRapida(): void {
    alert('Funcionalidade de criação rápida de reserva aqui!');
  }
}
