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
    enderecos: [],
    contatos: []
  };

  // Modelos temporários para adicionar novos contatos e endereços
  novoEndereco = {
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: ''
  };

  novoContato = {
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  // Adicionar endereço ao array
  adicionarEndereco(): void {
    if (this.novoEndereco.endRua && this.novoEndereco.endCidade) {
      this.cliente.enderecos?.push({ ...this.novoEndereco });
      this.novoEndereco = { endRua: '', endNumero: '', endCidade: '', endCep: '', endEstado: '' };
    } else {
      this.clienteService.showMessage('Preencha pelo menos rua e cidade!');
    }
  }

  // Remover endereço
  removerEndereco(index: number): void {
    this.cliente.enderecos?.splice(index, 1);
  }

  // Adicionar contato ao array
  adicionarContato(): void {
    if (this.novoContato.conCelular || this.novoContato.conEmail) {
      this.cliente.contatos?.push({ ...this.novoContato });
      this.novoContato = { conCelular: '', conTelefoneComercial: '', conEmail: '' };
    } else {
      this.clienteService.showMessage('Adicione ao menos um celular ou e-mail!');
    }
  }

  // Remover contato
  removerContato(index: number): void {
    this.cliente.contatos?.splice(index, 1);
  }

  // Criar cliente no backend
  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado com sucesso!');
      console.log('Cliente criado:', this.cliente);
      this.router.navigate(['/fcliente']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fcliente']);
    console.log('Cadastro cancelado');
  }
}
