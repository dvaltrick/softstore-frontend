import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './../config/config.service';
import { Injectable } from '@angular/core';
import { Produto } from '../models/Produto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ProdutosService {
  URL = "produtos";


  constructor(private service:ConfigService,
              private httpClient:HttpClient) { }

  public save(data:Produto):Observable<Produto>{
    return this.httpClient.post<Produto>(this.service.BASE_URL+this.URL,data,httpOptions);
  }

  public update(data:Produto):Observable<Produto>{
    return this.httpClient.put<Produto>(this.service.BASE_URL+this.URL,data,httpOptions);
  }

  public get():Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.service.BASE_URL+this.URL,httpOptions);
  }

  public delete(id:Number):Observable<any>{
    return this.httpClient.delete<Produto>(this.service.BASE_URL+this.URL+'/'+id,httpOptions);
  }


}
