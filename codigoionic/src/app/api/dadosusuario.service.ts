import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuarioService {

  private host = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getUsuarios() {
    return new Promise((ret) => {
      this.http.get(this.host + 'usuarios').subscribe(usuario => {
        ret(usuario);
      });
    });
  }

  public getDadoById(codUsuario: string) {
    return new Promise((ret) => {
      const body = {
        codUsuario: codUsuario,
      }
      this.http.get(this.host + 'usuario/'+`${codUsuario}`).subscribe(usuario => {
        ret(usuario);
      }); console.log(body)
    });
  }


  public deleteDadosUsuario(usuarioLogado: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete(this.host + 'usuario/' + usuarioLogado.codUsuario, { responseType: 'text' }).subscribe(
        () => {
          resolve('Usuario removido com sucesso');
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
