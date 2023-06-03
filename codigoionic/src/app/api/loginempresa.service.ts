import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginempresaService {
  private host = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getId(id: any){
    const url2 = `${this.host}/login/`;
   

    return new Promise((ret) => {
      this.http.get(url2 + id).subscribe(body2 => {
        ret(body2);
      });
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
