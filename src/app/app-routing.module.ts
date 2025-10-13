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
import { ProdutoUpdateComponent } from './components/Produto/produto-update/produto-update.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/formapagamento-update.component';
import { EstudioUpdateComponent } from './components/Estudio/estudio-update/estudio-update.component';
import { ClienteUpdateComponent } from './components/Cliente/cliente-update/cliente-update.component';


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
    path: 'formas-pagamento/update/:formId',
    component: FormaPagamentoUpdateComponent
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
    path: "produto/update/:proId",
    component: ProdutoUpdateComponent
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
    path: 'clientes/update/:cliId',
    component: ClienteUpdateComponent
  },
  

  {
    path: "festudio",
    component: EstudioCrudComponent
  },
  {
    path: "festudio/create",
    component: EstudioCreateComponent
  },
  {
    path: 'estudios/update/:estId',
    component: EstudioUpdateComponent
  },
  
  
  
  { path: '**', redirectTo: '', pathMatch: 'full' }  // ROTA CURINGA
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
