import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListagemreservasService {

  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getReservas(){
    return new Promise((ret) => {
      this.http.get(this.host + 'reservas').subscribe(reserva => {
        ret(reserva);
      });
    });
  }

  public deleteReserva(reservas: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete(this.host + 'reserva/' + reservas.codReserva, { responseType: 'text' }).subscribe(
        () => {
          resolve('Reserva cancelada com sucesso');
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
