import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlteraempresaService {

  private host = 'http://localhost:8080/api/empresa/'

  constructor(private http: HttpClient) { }

  public alteraDados(obj: any) {
    return new Promise((ret) => {
      
console.log(obj)

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      this.http.post(this.host, obj, { headers: headers }).subscribe(dados => {

        ret(dados);

      });
    })
  }
}

