import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[] = [];
  displayedColumns: string[] = ['cliNome', 'cliCpf', 'cliAtivo', 'action'];

  private subscription!: Subscription;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Carrega os clientes ao iniciar
    this.clienteService.loadClientes();

    // Inscreve no Observable para receber atualizações da lista automaticamente
    this.subscription = this.clienteService.clientes$.subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  ngOnDestroy(): void {
    // Limpa a inscrição para evitar memory leaks
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
