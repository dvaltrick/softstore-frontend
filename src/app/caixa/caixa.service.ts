import { Observable } from 'rxjs/Observable';
import { Venda } from './../models/Venda';
import { ConfigService } from './../config/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CaixaService {
  URL = "vendas";

  constructor(private service:ConfigService,
              private httpClient:HttpClient) { }

  public save(data:Venda):Observable<Venda>{
    return this.httpClient.post<Venda>(this.service.BASE_URL+this.URL,data,httpOptions);
  }
}
