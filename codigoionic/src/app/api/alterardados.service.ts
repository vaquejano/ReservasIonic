import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlterardadosService {


  private host = 'http://localhost:8080/api/empresa/';


  constructor(private http: HttpClient) { }


  public putDados(empresaLogada: any) {
    return new Promise((ret) => {

      console.log(empresaLogada)

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');
      this.http.put(this.host + empresaLogada.codEmpresa , JSON.stringify(empresaLogada), { headers: headers }).subscribe(dados => {
        ret(dados);
      });
    });
  }

}
