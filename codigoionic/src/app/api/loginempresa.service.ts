import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginempresaService {
  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  verificarCredenciais(cnpj: string, senha: string): Observable<boolean>  {
      const url = `${this.host}/login/`;

      const body = {
        cnpjEmpresa: cnpj,
        senhaEmpresa: senha
      };

      return this.http.post<boolean>(url, body);
  }
}
