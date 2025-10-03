import { Component } from '@angular/core';
import { Produto } from '../produto.module';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent {
  products!: Produto[];
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'action'];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(): void {
    this.produtoService.read().subscribe(produto => {
      this.products = produto;
      console.log(produto);
    });
  }

  // Navega para tela de edição
  editarProduto(id: number): void {
    this.router.navigate(['/products/update', id]);
  }

  // Deleta o produto
  deletarProduto(id: number): void {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.produtoService.delete(id).subscribe({
        next: () => {
          alert('Produto deletado com sucesso!');
          this.loadProdutos(); // recarrega a lista
        },
        error: err => alert('Erro ao deletar produto: ' + err.message)
      });
    }
  }
}
