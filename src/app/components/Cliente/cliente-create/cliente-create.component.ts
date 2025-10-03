import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    cliRg: '',
    cliDataNascimento: '',
    cliSexo: '',
    cliDataCadastro: '',
    cliObservacoes: '',
    cliAtivo: true,
    endProprietario: '',
  
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado com sucesso!');
      this.router.navigate(['/fcliente']);
      console.log('Cliente criado:', this.cliente);
    });
  }

  cancel(): void {
    this.router.navigate(['/fcliente']);
    console.log('Cadastro cancelado');
  }
}
