import { TiposProdutoModule } from './tipos-produto/tipos-produto.module';
import { ImpostosModule } from './impostos/impostos.module';
import { CaixaModule } from './caixa/caixa.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    ProdutosModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
