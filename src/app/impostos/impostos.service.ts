import { Imposto } from './../models/Imposto';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ImpostosService {
  URL = "impostos";


  constructor(private service:ConfigService,
              private httpClient:HttpClient) { }

  public save(data:Imposto):Observable<Imposto>{
    return this.httpClient.post<Imposto>(this.service.BASE_URL+this.URL,data,httpOptions);
  }

  public get():Observable<Imposto[]>{
    return this.httpClient.get<Imposto[]>(this.service.BASE_URL+this.URL,httpOptions);
  }

  public delete(id:Number):Observable<any>{
    return this.httpClient.delete<Imposto>(this.service.BASE_URL+this.URL+'/'+id,httpOptions);
  }

}
