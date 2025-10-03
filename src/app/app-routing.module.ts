import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EstudioCrudComponent } from './views/estudio-crud/estudio-crud.component';
import { ClienteCreateComponent } from './components/Cliente/cliente-create/cliente-create.component';
import { ProdutoCreateComponent } from './components/Produto/produto-create/produto-create.component';
import { EstudioCreateComponent } from './components/Estudio/estudio-create/estudio-create.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';

import { InicioComponent } from './components/inicio/inicio.component';  // IMPORTAR AQUI

const routes: Routes = [
  { path: '', component: InicioComponent }, // ROTA INICIAL
  {
    path: "fpagamentos",
    component: FormaPagamentoCrudComponent
  },
  {
    path: "fpagamentos/create",
    component: FormaPagamentoCreateComponent
  },
  {
    path: "fproduto",
    component: ProdutoCrudComponent
  },
  {
    path: "fproduto/create",
    component: ProdutoCreateComponent
  },
  {
    path: "fcliente",
    component: ClienteCrudComponent
  },
  {
    path: 'fcliente/create',
    component: ClienteCreateComponent
  },
  
  {
    path: "fcliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "festudio",
    component: EstudioCrudComponent
  },
  {
    path: "festudio/create",
    component: EstudioCreateComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }  // ROTA CURINGA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
