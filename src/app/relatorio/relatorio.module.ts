import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './relatorio.component';
import { RelatorioService } from './relatorio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RelatorioComponent],
  providers: [RelatorioService]
})
export class RelatorioModule { }
