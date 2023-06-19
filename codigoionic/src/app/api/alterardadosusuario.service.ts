import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlterardadosusuarioService {


  private host = 'http://localhost:8080/api/usuario/';


  constructor(private http: HttpClient) { }


  public putDados(usuarioLogado: any) {
    return new Promise((ret) => {

      console.log(usuarioLogado)

      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');
      this.http.put(this.host, (usuarioLogado), { headers: headers }).subscribe(usuario => {
        ret(usuario);
      });
    });
  }

}
