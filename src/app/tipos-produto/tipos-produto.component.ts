import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoProdutoImposto } from './../models/TipoProdutoImposto';
import { TiposProdutoService } from './tipos-produto.service';
import { TipoProduto } from './../models/TipoProduto';
import { Component, OnInit } from '@angular/core';
import { Imposto } from '../models/Imposto';
import { ImpostosService } from '../impostos/impostos.service';

@Component({
  selector: 'app-tipos-produto',
  templateUrl: './tipos-produto.component.html',
  styleUrls: ['./tipos-produto.component.css']
})
export class TiposProdutoComponent implements OnInit {
  editTipoProduto:TipoProduto = new TipoProduto();
  listTipos: TipoProduto[] = [];
  listImpostos: Imposto[] = [];
  editMode:Boolean = false;
  adicionaImposto:Imposto = new Imposto();

  constructor(private service:TiposProdutoService,
              private impostosService: ImpostosService,
              public snackBar:MatSnackBar) {
    this.load();
  }


  private load(){

    this.service.get().subscribe(
      data => {
        this.listTipos = data;
      }
    );

    this.impostosService.get().subscribe(
      data => {
        this.listImpostos = data;
      }
    );
  }

  public save(){
    this.service.save(this.editTipoProduto).subscribe(
      data => {
        this.load();
        this.edit(data);
        this.snackBar.open("Tipo de produto salvo com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível salvar o tipo de produto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public update(){
    console.log(this.editTipoProduto);
    this.service.update(this.editTipoProduto).subscribe(
      data => {
        this.load();
        this.editMode = false;
        this.editTipoProduto = new TipoProduto();
        this.snackBar.open("Tipo de produto salvo com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível atualizar o tipo de produto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public cancel(){
    this.editMode = false;
    this.editTipoProduto = new TipoProduto();
  }

  public edit(tipo:TipoProduto){
    this.editMode = true;
    this.editTipoProduto = tipo;
  }

  public remove(tipo:TipoProduto){
    this.service.delete(tipo.tipoProdutoId).subscribe(
      data => {
        console.log(data);
        this.load();
        this.snackBar.open("Tipo de produto removido com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível remover o tipo de produto, verifique se o mesmo está vinculado a um produto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public addImposto(){
    var toAddTipoImp = new TipoProdutoImposto();
    toAddTipoImp.tipoProdutoId = this.editTipoProduto.tipoProdutoId;
    toAddTipoImp.impostoId = this.adicionaImposto.impostoId;
    this.service.addImposto(toAddTipoImp).subscribe(
      data => {
        this.editTipoProduto.impostos.push(this.adicionaImposto);
        this.snackBar.open("Imposto vinculado com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível vincular o imposto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public removeImposto(imposto:Imposto){
    var toRemvoeTipoImp = new TipoProdutoImposto();
    toRemvoeTipoImp.tipoProdutoId = this.editTipoProduto.tipoProdutoId;
    toRemvoeTipoImp.impostoId = imposto.impostoId;
    this.service.removeImposto(toRemvoeTipoImp).subscribe(
      data => {
        var index: number = this.editTipoProduto.impostos.indexOf(imposto);
        if (index !== -1) {
            this.editTipoProduto.impostos.splice(index, 1);
        }
        this.snackBar.open("Imposto desvinculado com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível desvincular o imposto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  ngOnInit() {
  }

}
