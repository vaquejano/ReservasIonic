import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListagemreservasService {

  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getReservas(codEmpresa: any): Promise<any> {
    console.log(codEmpresa)
    return new Promise((resolve) => {
      this.http.get(this.host + 'reservas/'+`${codEmpresa}`).subscribe(
        (empresa) => {
          console.log(empresa)
          resolve(empresa);
        },
        (error) => {
        }
      );
    }).catch((error) => {
      console.error('Erro na requisição HTTP:', error);
      throw error;
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
