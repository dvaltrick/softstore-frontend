import { MatSnackBar } from '@angular/material/snack-bar';
import { TiposProdutoService } from './../tipos-produto/tipos-produto.service';
import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { TipoProduto } from '../models/TipoProduto';
import { ItemVenda } from '../models/ItemVenda';

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

  constructor(private service:ProdutosService,
              private tiposService:TiposProdutoService,
              private snackBar:MatSnackBar) {
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
        this.snackBar.open("Produto salvo com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível salvar o produto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public update(){
    this.service.update(this.editProduto).subscribe(
      data => {
        this.load();
        this.editProduto = new Produto();
        this.editMode = false;
        this.snackBar.open("Produto atualizado com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível atualizar o produto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public edit(produto:Produto){
    this.editProduto = produto;
    this.editMode = true;
  }

  public cancel(){
    this.editProduto = new Produto();
    this.editMode = false;
  }

  public remove(produto:Produto){
    this.service.delete(produto.produtoId).subscribe(
      data => {
        console.log(data);
        this.load();
        this.snackBar.open("Produto removido com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível remover o produto, verifique se o mesmo já possui uma venda", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  ngOnInit() {
  }

}
