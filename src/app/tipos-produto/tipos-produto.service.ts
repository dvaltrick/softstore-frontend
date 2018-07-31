import { TipoProdutoImposto } from './../models/TipoProdutoImposto';
import { TipoProduto } from './../models/TipoProduto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './../config/config.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class TiposProdutoService {
  URL = "tiposprodutos";


  constructor(private service:ConfigService,
              private httpClient:HttpClient) { }

  public save(data:TipoProduto):Observable<TipoProduto>{
    return this.httpClient.post<TipoProduto>(this.service.BASE_URL+this.URL,data,httpOptions);
  }

  public addImposto(data:TipoProdutoImposto):Observable<TipoProdutoImposto>{
    return this.httpClient.post<TipoProdutoImposto>(this.service.BASE_URL+this.URL+'/addimposto',data,httpOptions);
  }

  public removeImposto(data:TipoProdutoImposto):Observable<TipoProdutoImposto>{
    return this.httpClient.post<TipoProdutoImposto>(this.service.BASE_URL+this.URL+'/removeimposto',data,httpOptions);
  }


  public update(data:TipoProduto):Observable<TipoProduto>{
    return this.httpClient.put<TipoProduto>(this.service.BASE_URL+this.URL,data,httpOptions);
  }

  public get():Observable<TipoProduto[]>{
    return this.httpClient.get<TipoProduto[]>(this.service.BASE_URL+this.URL,httpOptions);
  }

  public delete(id:Number):Observable<any>{
    return this.httpClient.delete<TipoProduto>(this.service.BASE_URL+this.URL+'/'+id,httpOptions);
  }
}
