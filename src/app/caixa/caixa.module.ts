import { ProdutosService } from './../produtos/produtos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { CaixaService } from './caixa.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CaixaComponent],
  providers: [CaixaService, ProdutosService]
})
export class CaixaModule { }
