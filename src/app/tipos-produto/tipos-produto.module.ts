import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImpostosService } from './../impostos/impostos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiposProdutoComponent } from './tipos-produto.component';
import { TiposProdutoService } from './tipos-produto.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule
  ],
  declarations: [TiposProdutoComponent],
  providers: [TiposProdutoService, ImpostosService],
  exports:[MatSnackBarModule]
})
export class TiposProdutoModule { }
