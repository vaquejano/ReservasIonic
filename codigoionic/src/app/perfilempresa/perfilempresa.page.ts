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
  nome_responsavel: string;
  endereco_empresa: string;
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
    this.nome_responsavel = '',
    this.endereco_empresa = '',
    this.porte_empresa = '';
    this.ramo_empresa = '';
    this.senha_empresa = '';
    this.dados = dadosservice;
    this.getDadoById();
  }

  // public getAllDados2(){
  //   this.dadosservice.getAllDados().then((dados:any) => {
  //     console.log(dados);
  //   })
  // }

  public getDadoById(){
    this.dadosservice.getDadoById(1).then((dados:any) => {
      this.nome_fantasia = dados.nomeFantasia;
      this.cnpj_empresa = dados.cnpjEmpresa;
      this.email_empresa = dados.emailEmpresa;
      this.nome_responsavel =  '',
      this.endereco_empresa = '',
      this.porte_empresa = dados.porteEmpresa;
      this.ramo_empresa = dados.ramoEmpresa;
      this.senha_empresa = dados.senhaEmpresa;
    })
  }

  // getAllDados() {

  //   this.dados.get('empresas').then((empresa: { nome_fantasia: string; cnpj_empresa: number; email_empresa: string; nome_responsavel: string; endereco_empresa: string; porte_empresa: string; ramo_empresa: string; }) => {
  //     this.nome_fantasia = empresa.nome_fantasia;
  //     this.cnpj_empresa = empresa.cnpj_empresa;
  //     this.email_empresa = empresa.email_empresa;
  //     this.nome_responsavel = empresa.nome_responsavel;
  //     this.endereco_empresa = empresa.endereco_empresa;
  //     this.porte_empresa = empresa.porte_empresa;
  //     this.ramo_empresa = empresa.ramo_empresa;
  // });
}