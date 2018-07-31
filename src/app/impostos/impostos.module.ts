import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from './../config/config.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpostosComponent } from './impostos.component';
import { FormsModule } from '@angular/forms';
import { ImpostosService } from './impostos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[ImpostosService, ConfigService, HttpClient],
  declarations: [ImpostosComponent]
})
export class ImpostosModule { }
