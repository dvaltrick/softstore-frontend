import { TiposProdutoService } from './../tipos-produto/tipos-produto.service';
import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { TipoProduto } from '../models/TipoProduto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  editProduto = new Produto();
  listProdutos: Produto[] = [];
  listTipos: TipoProduto[] = [];
  titulo:String = "";
  editMode:Boolean = false;

  constructor(private service:ProdutosService, private tiposService:TiposProdutoService) {
    this.load();
  }

  private load(){

    this.service.get().subscribe(
      data => {
        console.log(data);
        this.listProdutos = data;
      }
    );

    this.tiposService.get().subscribe(
      data => {
        this.listTipos = data;
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

  public edit(produto:Produto){
    this.editProduto = produto;
    this.editMode = true;
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
