import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginempresaService {

  private host = 'http://localhost:8080/api/empresas/'

  constructor(private http: HttpClient) { }

  verificarCredenciais(cnpj_empresa: any, senha_empresa: any) {
    const endpoint = `${this.host}/verificar-credenciais`;
    const body = { cnpj_empresa, senha_empresa };

    return this.http.post(endpoint, body);
  }
}
