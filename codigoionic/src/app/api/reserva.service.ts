import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  private host = 'http://localhost:8080/api/reserva/'


 public salvaReserva(obj: any) {
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

