import { Observable } from 'rxjs/Observable';
import { Venda } from './../models/Venda';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './../config/config.service';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RelatorioService {
  URL = "vendas";

  constructor(private service:ConfigService,
              private httpClient:HttpClient) { }

  public get():Observable<Venda[]>{
    return this.httpClient.get<Venda[]>(this.service.BASE_URL+this.URL,httpOptions);
  }

}
