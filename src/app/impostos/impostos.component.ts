import { Imposto } from './../models/Imposto';
import { Component, OnInit } from '@angular/core';
import { ImpostosService } from './impostos.service';

@Component({
  selector: 'app-impostos',
  templateUrl: './impostos.component.html',
  styleUrls: ['./impostos.component.css']
})

export class ImpostosComponent implements OnInit {
  editImposto:Imposto = new Imposto();
  listImpostos: Imposto[] = [];
  titulo:String = "";

  constructor(private service:ImpostosService) {
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
      }
    );
  }

  public remove(imposto:Imposto){
    this.service.delete(imposto.impostoId).subscribe(
      data => {
        console.log(data);
        this.load();
      }
    );
  }

  ngOnInit() {
  }

}
