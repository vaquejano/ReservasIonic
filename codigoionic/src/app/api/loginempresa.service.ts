import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginempresaService {
  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getId(codEmpresa: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.host + 'empresa/'+`${codEmpresa}`).subscribe(
        (empresa) => {
          resolve(empresa);
        },
        (error) => {
          reject(error);
        }
      );
    }).catch((error) => {
      console.error('Erro na requisição HTTP:', error);
      throw error;
    });
  }

  public verificarCredenciais(cnpj: string, senha: string) {
    return new Promise((ret) => {
      const url = `${this.host}/login/`;

      const body = {
        cnpjEmpresa: cnpj,
        senhaEmpresa: senha
      };

      this.http.post<boolean>(url, body).subscribe((empresa: any) => {
        ret(empresa);
      });
  
    });

    

  }
}
