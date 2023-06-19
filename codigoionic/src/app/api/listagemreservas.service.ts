import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListagemreservasService {

  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getReservas() {
    return new Promise((ret) => {
      this.http.get(this.host + 'reservas').subscribe(reservas => {
        ret(reservas);
      });
    });
  }

}
