import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReservausuarioService {

  private host = 'http://localhost:8080/api/reserva/'

  constructor(private http: HttpClient) { }

  public reservando(obj: any) {
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
