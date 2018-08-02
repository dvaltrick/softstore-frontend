import { ConfigService } from './../config/config.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { FormsModule } from '@angular/forms';
import { TiposProdutoService } from '../tipos-produto/tipos-produto.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule
  ],
  declarations: [ProdutosComponent],
  providers: [ProdutosService, ConfigService, TiposProdutoService],
  exports:[MatSnackBarModule]
})
export class ProdutosModule { }
