import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroempresaService {

  private host = 'http://localhost:8080/api/empresa'

  constructor(private http: HttpClient) { }

  public salvaEmpresa(obj: any) {
    return new Promise((ret) => {


      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');


      this.http.post(this.host, JSON.stringify(obj), { headers: headers }).subscribe(dados => {

        ret(dados);

      });
    })
  }
}
