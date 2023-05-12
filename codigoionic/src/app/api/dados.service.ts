import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

    private host = 'localhost:8080/api/empresas'

  constructor(private http: HttpClient) { }

  public getAllDados(){
    return new Promise((ret) => {

      this.http.get(this.host).subscribe(dados => {

        ret(dados);
      })
    })
  }

  public getDadoById(id: number){
    return new Promise((ret) => {

      
      this.http.get(this.host + id).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public postDados(obj: any){
    return new Promise((ret) => {

      
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      
      this.http.post(this.host, JSON.stringify(obj), { headers: headers }).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public putDados(obj: any){
    return new Promise((ret) => {
      
      
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json; charset=UTF-8');

      
      this.http.put(this.host + obj.id, JSON.stringify(obj), { headers: headers }).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public deleteDados(id: number){
    return new Promise((ret) => {

      
      this.http.delete(this.host + id).subscribe(dados => {

        console.log(dados);

      });
    })
  }
}


