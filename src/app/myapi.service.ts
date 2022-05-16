import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:string="http://localhost:9797//api";
  baseUrlS:string="http://localhost:9797/adminRest/api/validate/";
  getAdmin(name:string,pass:string){
    return this.httpClient.get(this.baseUrlS+ name+"/"+pass);
    
  }
}
