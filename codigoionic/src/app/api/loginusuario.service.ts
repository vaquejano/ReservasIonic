import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginusuarioService {
  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getId(codUsuario: any): Promise<any> {
    console.log(codUsuario)
    return new Promise((resolve) => {
      this.http.get(this.host + 'usuario/'+`${codUsuario}`).subscribe(
        (usuario) => {
          console.log(usuario)
          resolve(usuario);
        },
        (error) => {
        }
      );
    }).catch((error) => {
      console.error('Erro na requisição HTTP:', error);
      throw error;
    });
  }

  public verificarCredenciais(cpf: string, senha: string) {
    return new Promise((ret) => {
      const url = `${this.host}loginusuario/`;

      const body = {
        cpfUsuario: cpf,
        senhaUsuario: senha
      };

      this.http.post<boolean>(url, body).subscribe((usuario: any) => {
        ret(usuario);
      });

    });
}
}