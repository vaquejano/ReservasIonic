import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReservausuarioService {

  private host = 'http://localhost:8080/api/reserva/'

  // private host2 = 'http://localhost:8080/api/'


  constructor(private http: HttpClient) { }


  // getId(codEmpresa: any): Promise<any> {
  //   console.log(codEmpresa)
  //   return new Promise((resolve) => {
  //     this.http.get(this.host2 + 'empresa/'+`${codEmpresa}`).subscribe(
  //       (dados) => {
  //         console.log(dados)
  //         resolve(dados);
  //       },
  //       (error) => {
  //       }
  //     );
  //   }).catch((error) => {
  //     console.error('Erro na requisição HTTP:', error);
  //     throw error;
  //   });
  // }


  public reservando(obj: any) {
    console.log("Dados a serem enviados para o servidor:", obj);
  
    return new Promise((ret) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');
  
      this.http.post(this.host, obj, { headers: headers }).subscribe(dados => {
        console.log("Resposta do servidor:", dados);
        ret(dados);
      });
    });
  }

}
