import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../Cliente/cliente.service';
  // ajuste o caminho conforme seu projeto

interface Reserva {
  cliente: string;
  estudio: string;
  data: string;
  horario: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  reservasAtivas = 12;
  clientesCadastrados = 0;  // Inicializado com 0 até carregar do backend
  estudiosDisponiveis = 7;
  produtosCadastrados = 30;
  formasPagamento = 5;

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

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.loadClientesCount();
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

  criarReservaRapida(): void {
    alert('Funcionalidade de criação rápida de reserva aqui!');
  }
}
