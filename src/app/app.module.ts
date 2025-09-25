import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

// módulos importados de "material" para usar seus componentes
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// pegar http
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EstudioCrudComponent } from './views/estudio-crud/estudio-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { ClienteCreateComponent } from './components/Cliente/cliente-create/cliente-create.component';
import { ProdutoCreateComponent } from './components/Produto/produto-create/produto-create.component';
import { EstudioCreateComponent } from './components/Estudio/estudio-create/estudio-create.component';
import { MatOptionModule } from "@angular/material/core";
import { ProdutoReadComponent } from './components/Produto/produto-read/produto-read.component';
import { ClienteReadComponent } from './components/Cliente/cliente-read/cliente-read.component';
import { MatIconModule } from '@angular/material/icon';
import { EstudioReadComponent } from './components/Estudio/estudio-read/estudio-read.component';
import { FormaPagamentoReadComponent } from './components/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';
import { InicioComponent } from './components/inicio/inicio.component';

// Import ngx-charts
import { NgxChartsModule } from '@swimlane/ngx-charts';


registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FormaPagamentoCrudComponent,
    ProdutoCrudComponent,
    ClienteCrudComponent,
    EstudioCrudComponent,
    FormaPagamentoCreateComponent,
    ClienteCreateComponent,
    ProdutoCreateComponent,
    EstudioCreateComponent,
    ProdutoReadComponent,
    ClienteReadComponent,
    EstudioReadComponent,
    FormaPagamentoReadComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Material Modules
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatOptionModule,
    MatIconModule,
    // <-- Adicione aqui o ngx-charts
    NgxChartsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
