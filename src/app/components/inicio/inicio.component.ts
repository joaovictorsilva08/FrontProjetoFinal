import { Component, OnInit } from '@angular/core';

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
  clientesCadastrados = 45;
  estudiosDisponiveis = 7;
  produtosCadastrados = 30;
  formasPagamento = 5;

  // Exemplo simples de próximas reservas
  proximasReservas: Reserva[] = [
    { cliente: 'João Silva', estudio: 'Estúdio A', data: '25/09/2025', horario: '14:00' },
    { cliente: 'Maria Souza', estudio: 'Estúdio B', data: '26/09/2025', horario: '09:00' },
    { cliente: 'Carlos Lima', estudio: 'Estúdio C', data: '27/09/2025', horario: '16:30' },
  ];

  // Dados para gráfico simples (reservas por mês)
  reservasPorMes = [
    { name: 'Jan', value: 5 },
    { name: 'Fev', value: 8 },
    { name: 'Mar', value: 4 },
    { name: 'Abr', value: 7 },
    { name: 'Mai', value: 10 },
    { name: 'Jun', value: 6 }
  ];

  // Configurações para ngx-charts (caso queira usar)
  view: [number, number] = [600, 300];
  // Cores, legendas, etc. podem ser configurados aqui

  constructor() { }

  ngOnInit(): void {
    // Aqui você pode buscar os dados reais do backend
  }

  criarReservaRapida(): void {
    // Aqui você pode navegar para a tela de criação de reservas
    alert('Funcionalidade de criação rápida de reserva aqui!');
  }
}
