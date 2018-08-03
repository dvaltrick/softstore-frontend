import { Venda } from './../models/Venda';
import { RelatorioService } from './relatorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  vendas:Venda[] = [];

  constructor(private service:RelatorioService) {
    this.load();
  }

  public load(){
    this.service.get().subscribe(
      data => {
        this.vendas = data;
      }
    );
  }

  ngOnInit() {
  }

}
