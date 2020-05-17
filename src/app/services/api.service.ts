import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private readonly _httpClient: HttpClient) { }

  get(endPointURL:string): Observable<any>{
    return this._httpClient.get(this.baseUrl+endPointURL);
  }

  post(endPointURL:string, dataObject: any): Observable<any>{
    return this._httpClient.post(this.baseUrl+endPointURL,dataObject);
  }

  getById(endPointURL:string, id:number): Observable<any>{
    return this._httpClient.get(this.baseUrl+endPointURL+"/"+id+"/");
  }
}
