import { ConfigService } from './../config/config.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { FormsModule } from '@angular/forms';
import { TiposProdutoService } from '../tipos-produto/tipos-produto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProdutosComponent],
  providers: [ProdutosService, ConfigService, TiposProdutoService]
})
export class ProdutosModule { }
