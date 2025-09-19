import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {
  clientes!: Cliente[];
  displayedColumns = ['cliNome', 'cliCpf', 'cliDataNascimento', 'cliSexo', 'cliAtivo', 'action'];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes.map(cliente => ({
        ...cliente,
        cliDataNascimento: cliente.cliDataNascimento ? this.formatDate(new Date(cliente.cliDataNascimento)) : '',
        cliDataCadastro: cliente.cliDataCadastro ? this.formatDate(new Date(cliente.cliDataCadastro)) : ''
      }));
    });
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
  }
}

