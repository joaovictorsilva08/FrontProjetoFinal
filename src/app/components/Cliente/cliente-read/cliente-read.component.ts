import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit, OnDestroy {

  clientes: Cliente[] = [];
  displayedColumns: string[] = ['cliNome', 'cliCpf', 'cliAtivo', 'action'];

  private subscription!: Subscription;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clienteService.loadClientes();
    this.subscription = this.clienteService.clientes$.subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  editarCliente(id: number): void {
    this.router.navigate(['/fcliente/update', id]);
  }

  deletarCliente(id: number): void {
    const confirmar = confirm('Tem certeza que deseja deletar este cliente?');
    if (confirmar) {
      this.clienteService.delete(id).subscribe(() => {
        this.clientes = this.clientes.filter(cli => cli.cliId !== id);
        this.clienteService.showMessage('Cliente deletado com sucesso!');
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
