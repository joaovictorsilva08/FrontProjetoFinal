import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.module';
import { ProdutoService } from '../produto.service';


@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {


  product!: Produto;
  

  constructor(private productService: ProdutoService, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const proId = this.route.snapshot.paramMap.get('proId')
    this.productService.readById(proId!).subscribe((product: Produto) =>{
      this.product = product
    })
    
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}