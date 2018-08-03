import { MatSnackBar } from '@angular/material/snack-bar';
import { CaixaService } from './caixa.service';
import { ProdutosService } from './../produtos/produtos.service';
import { Venda } from './../models/Venda';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ItemVenda } from '../models/ItemVenda';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {
  venda:Venda = new Venda();
  itemVenda = new ItemVenda();
  produtos: Produto[] = [];

  constructor(private service:CaixaService,
              private produtosService:ProdutosService,
              private snackBar:MatSnackBar) {
    this.load();
  }

  ngOnInit() {
  }

  public load(){
    this.produtosService.get().subscribe(
      data => {
        this.produtos = data;
      }
    );
  }

  public save(){
    this.service.save(this.venda).subscribe(
      data => {
        this.venda = new Venda();
        this.snackBar.open("Venda finalizada com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível finalziar a venda", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }


  public addItem(){
    this.itemVenda.totalItem = (this.itemVenda.produto.valorUnitario.valueOf() * this.itemVenda.quantidade.valueOf());

    var totalImpoItem:number = 0;

    this.itemVenda.produto.tipo.impostos.forEach(element => {
      totalImpoItem = totalImpoItem + ((this.itemVenda.totalItem.valueOf()/100) * element.percentual.valueOf());
    });

    this.itemVenda.totalImpostos = totalImpoItem;
    this.venda.itens.push(this.itemVenda);

    this.totalizaVenda();
    this.itemVenda = new ItemVenda();
  }

  public totalizaVenda(){
    var totalVenda:number = 0;
    var totalImpoVenda:number = 0;

    this.venda.itens.forEach(
      item => {
        totalVenda = totalVenda + item.totalItem.valueOf();
        totalImpoVenda = totalImpoVenda + item.totalImpostos.valueOf();
      }
    );

    this.venda.total = totalVenda;
    this.venda.totalImpostos = totalImpoVenda;
  }

  public removeItem(item:ItemVenda){
    var index: number = this.venda.itens.indexOf(item);
    if (index !== -1) {
        this.venda.itens.splice(index, 1);
    }
    this.totalizaVenda();
  }
}
