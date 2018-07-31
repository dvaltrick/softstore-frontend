import { ProdutosComponent } from './produtos/produtos.component';
import { CaixaComponent } from './caixa/caixa.component';
import { ImpostosComponent } from './impostos/impostos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiposProdutoComponent } from './tipos-produto/tipos-produto.component';

const routes: Routes = [
  { path: 'caixa', component:CaixaComponent},
  { path: 'impostos', component:ImpostosComponent},
  { path: 'tiposproduto', component:TiposProdutoComponent},
  { path: 'produtos', component:ProdutosComponent},
  { path: '', redirectTo: '/caixa', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
