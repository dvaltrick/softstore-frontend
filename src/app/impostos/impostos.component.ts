import { Imposto } from './../models/Imposto';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ImpostosService } from './impostos.service';
import { ToastsManager } from 'ng2-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-impostos',
  templateUrl: './impostos.component.html',
  styleUrls: ['./impostos.component.css']
})

export class ImpostosComponent implements OnInit {
  editImposto:Imposto = new Imposto();
  listImpostos: Imposto[] = [];
  titulo:String = "";

  constructor(private service:ImpostosService,
              public snackBar: MatSnackBar) {

    this.load();
  }

  private load(){

    this.service.get().subscribe(
      data => {
        this.listImpostos = data;
      }
    );
  }

  public save(){
    this.service.save(this.editImposto).subscribe(
      data => {
        this.load();
        this.editImposto = new Imposto();
        this.snackBar.open("Imposto salvo com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível salvar o imposto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  public remove(imposto:Imposto){
    this.service.delete(imposto.impostoId).subscribe(
      data => {
        console.log(data);
        this.load();
        this.snackBar.open("Imposto removido com sucesso", "Sucesso!!!", {
          duration: 5000
        });
      },
      erro =>{
        this.snackBar.open("Não foi possível remover o imposto, verifique se o mesmo está vinculado a um tipo de produto", "Ops!!!", {
          duration: 5000
        });
      }
    );
  }

  ngOnInit() {
  }

}
