import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('cliId');
    if (cliId) {
      this.clienteService.readById(cliId).subscribe((cli: Cliente) => {
        this.cliente = cli;
      });
    } else {
      this.cliente = {} as Cliente; // Novo registro
    }
  }

  salvarCliente(): void {
    if (this.cliente.cliId) {
      this.clienteService.update(this.cliente).subscribe(() => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/clientes']);
      });
    } else {
      this.clienteService.create(this.cliente).subscribe(() => {
        this.clienteService.showMessage('Cliente criado com sucesso!');
        this.router.navigate(['/clientes']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}
