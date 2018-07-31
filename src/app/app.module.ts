import { TiposProdutoModule } from './tipos-produto/tipos-produto.module';
import { ImpostosModule } from './impostos/impostos.module';
import { CaixaModule } from './caixa/caixa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CaixaModule,
    ImpostosModule,
    TiposProdutoModule,
    ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
