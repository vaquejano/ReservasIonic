import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginusuarioService {
  private host = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  verificarCredenciais(cpf: string, senha: string): Observable<boolean> {
    const url = `${this.host}/loginusuario/`; // Substitua pelo URL correto do seu endpoint de login

    const body = {
      cpfUsuario: cpf,
      senhaUsuario: senha
    };
  

    return this.http.post<boolean>(url, body);
  }
}
