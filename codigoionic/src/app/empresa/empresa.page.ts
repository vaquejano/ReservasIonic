import { Component, OnInit } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {

  private host = 'http://localhost:8080/api'

  cnpj_empresa: any;
  senha_empresa: any;

  constructor(private http: HttpClient) { }

  public buscarEmpresa(): void {
    const host = 'http://localhost:8080/api'; // Substitua pelo URL da sua API
  
    this.http.get(host + '/empresas/').subscribe(
      (response ) => {
        // Manipule a resposta da API aqui
        console.log('entrou');
      },
      (error) => {
        // Manipule os erros da API aqui
        console.log('senha errada');
      }
    );
  }
}