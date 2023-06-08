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



  public getDadoById(codEmpresa: string) {
    return new Promise((ret) => {
      const body = {
        codEmpresa: codEmpresa,
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

  public deleteDados(empresaLogada: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete(this.host + 'empresa/' + empresaLogada.codEmpresa, { responseType: 'text' }).subscribe(
        () => {
          resolve('Empresa removida com sucesso');
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
}
