import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private host = 'http://localhost:8080/api/'; // Ajuste a URL base

  constructor(private http: HttpClient) { }

  public getAllDados() {
    return new Promise((ret) => {
      this.http.get(this.host + 'login').subscribe(dados => {
        ret(dados);
      });
    });
  }

  // public getDadoById (codempresa: string) {

  //     return new Promise((ret) => {


  //       const body = {
  //         codEmpresa: codempresa
  //       }

  //       this.http.get(this.host + 'empresa/'+`${codempresa}`).subscribe(empresa => {
  //         ret(empresa);
  //       });
  //       console.log(body)
  //     });
  //   }


  public getDadoById(codEmpresa: string) {
    return new Promise((ret) => {
      const body = {
        codEmpresa: codEmpresa,
        // cnpjEmpresa: cnpjEmpresa,
        // senhaEmpresa: senhaEmpresa,
        // emailEmpresa: emailEmpresa,
        // enderecoEmpresa: enderecoEmpresa,
        // nomeFantasia: nomeFantasia,
        // nomeResponsavel: nomeResponsavel,
        // porteEmpresa: porteEmpresa,
        // ramoEmpresa: ramoEmpresa
      }
      this.http.get(this.host + 'empresa/'+`${codEmpresa}`).subscribe(empresa => {
        ret(empresa);
      }); console.log(body)
    });
  }










  public postDados(obj: any) {
    return new Promise((ret) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');
      this.http.post(this.host, JSON.stringify(obj), { headers: headers }).subscribe(dados => {
        ret(dados);
      });
    });
  }

  public putDados(obj: any) {
    return new Promise((ret) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');
      this.http.put(this.host + obj.id, JSON.stringify(obj), { headers: headers }).subscribe(dados => {
        ret(dados);
      });
    });
  }

  public deleteDados(id: number) {
    return new Promise((ret) => {
      this.http.delete(this.host + id).subscribe(dados => {
        console.log(dados);
      });
    });
  }
}
