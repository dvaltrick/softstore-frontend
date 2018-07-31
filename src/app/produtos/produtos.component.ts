import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  editProduto = new Produto();
  listProdutos: Produto[] = [];
  titulo:String = "";

  constructor(private service:ProdutosService) {
    this.load();
  }

  private load(){

    this.service.get().subscribe(
      data => {
        console.log(data);
        this.listProdutos = data;
      }
    );
  }

  public save(){
    this.service.save(this.editProduto).subscribe(
      data => {
        this.load();
        this.editProduto = new Produto();
      }
    );
  }

  public remove(produto:Produto){
    this.service.delete(produto.produtoId).subscribe(
      data => {
        console.log(data);
        this.load();
      }
    );
  }

  ngOnInit() {
  }

}
