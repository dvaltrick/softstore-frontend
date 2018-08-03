import { NgSelectModule } from '@ng-select/ng-select';
import { ProdutosService } from './../produtos/produtos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';
import { CaixaService } from './caixa.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    NgSelectModule
  ],
  declarations: [CaixaComponent],
  providers: [CaixaService, ProdutosService],
  exports:[MatSnackBarModule]
})
export class CaixaModule { }
