import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaAny } from '../../component/entidades/respuesta-any';

@Injectable({
  providedIn: 'root'
})
export class TestCSSService {

  constructor(public http: HttpClient) {}

  login(datos:any){
    //console.log(datos.value)
    const body = JSON.stringify(datos);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'user': environment.configApp.usuario,
      'pass': environment.configApp.password});

    const options = { headers: headers };
 
   return this.http.post<RespuestaAny>(environment.configApp.urlservidor + 'login', body, options);
 }

}
