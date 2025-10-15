import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente!: Cliente;

  // 🔸 Arrays auxiliares
  enderecos: any[] = [];
  contatos: any[] = [];

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cliId = this.route.snapshot.paramMap.get('cliId');
    if (cliId) {
      this.clienteService.readById(cliId).subscribe((cli: Cliente) => {
        this.cliente = cli;
        this.enderecos = cli.enderecos || [];
        this.contatos = cli.contatos || [];
      });
    } else {
      this.cliente = {
        cliId: 0,
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
    }
  }

  // ================= ENDEREÇOS =================
  adicionarEndereco(): void {
    this.enderecos.push({ ...this.novoEndereco });
    this.novoEndereco = { endRua: '', endNumero: '', endCidade: '', endCep: '', endEstado: '' };
  }

  removerEndereco(index: number): void {
    const endereco = this.enderecos[index];
    if (endereco.endId) {
      this.clienteService.deleteEndereco(endereco.endId).subscribe({
        next: () => {
          this.enderecos.splice(index, 1);
          this.clienteService.showMessage('Endereço removido com sucesso!');
        },
        error: () => this.clienteService.showMessage('Erro ao remover endereço')
      });
    } else {
      this.enderecos.splice(index, 1);
    }
  }

  // ================= CONTATOS =================
  adicionarContato(): void {
    this.contatos.push({ ...this.novoContato });
    this.novoContato = { conCelular: '', conTelefoneComercial: '', conEmail: '' };
  }

  removerContato(index: number): void {
    const contato = this.contatos[index];
    if (contato.conId) {
      this.clienteService.deleteContato(contato.conId).subscribe({
        next: () => {
          this.contatos.splice(index, 1);
          this.clienteService.showMessage('Contato removido com sucesso!');
        },
        error: () => this.clienteService.showMessage('Erro ao remover contato')
      });
    } else {
      this.contatos.splice(index, 1);
    }
  }

  // ================= SALVAR =================
  updateCliente(): void {
    // 🔹 Antes de salvar, atualizamos os arrays no objeto cliente
    this.cliente.enderecos = this.enderecos;
    this.cliente.contatos = this.contatos;

    this.clienteService.update(this.cliente).subscribe({
      next: () => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/fcliente']);
      },
      error: () => this.clienteService.showMessage('Erro ao atualizar cliente')
    });
  }

  cancel(): void {
    this.router.navigate(['/fcliente']);
  }
}
