import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-perfilempresa',
  templateUrl: './perfilempresa.page.html',
  styleUrls: ['./perfilempresa.page.scss'],
})
export class PerfilempresaPage {

  nome_fantasia: string;
  cnpj_empresa: number;
  email_empresa: string;
  porte_empresa: string;
  ramo_empresa: string;
  senha_empresa: string;
  dados: any;
 

  constructor(private dadosservice: DadosService) {
    // Aqui você pode buscar os dados do usuário do seu banco de dados ou de outro serviço.
    // Por enquanto, vamos preencher os campos com alguns dados fictícios.
    this.nome_fantasia = '';
    this.cnpj_empresa = 0;
    this.email_empresa = '';
    this.porte_empresa = '';
    this.ramo_empresa = '';
    this.senha_empresa = '';
    this.dados = dadosservice;
  }


  getAllDados() {

    this.dados.get('empresas').then((empresa: { nome_fantasia: string; cnpj_empresa: number; email_empresa: string; porte_empresa: string; ramo_empresa: string; }) => {
      this.nome_fantasia = empresa.nome_fantasia;
      this.cnpj_empresa = empresa.cnpj_empresa;
      this.email_empresa = empresa.email_empresa;
      this.porte_empresa = empresa.porte_empresa;
      this.ramo_empresa = empresa.ramo_empresa;
  });
}

}
