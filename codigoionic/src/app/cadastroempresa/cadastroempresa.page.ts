import { Component, OnInit } from '@angular/core';
import { CadastroempresaService } from '../api/cadastroempresa.service';


@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.page.html',
  styleUrls: ['./cadastroempresa.page.scss'],
})
export class CadastroempresaPage {

  nome_fantasia: any;
  cnpj_empresa: any;
  email_empresa: any;
  nome_responsavel: any;
  endereco_empresa: any;
  porte_empresa: any;
  ramo_empresa: any;
  senha_empresa: any;
  dados: any;

  constructor(private cadastroempresaservice: CadastroempresaService) { 

  this.nome_fantasia = '';
  this.cnpj_empresa = '';
  this.email_empresa = '';
  this.nome_responsavel = '',
  this.endereco_empresa = '',
  this.porte_empresa = '';
  this.ramo_empresa = '';
  this.senha_empresa = '';
  this.dados = cadastroempresaservice;
 
  }

  public salvaEmpresa(){
    const obj = {

      nomeFantasia    : this.nome_fantasia,
      cnpjEmpresa     : this.cnpj_empresa,
      enderecoEmpresa : this.endereco_empresa,
      emailEmpresa    : this.email_empresa,
      ramoEmpresa      : this.ramo_empresa,
      porteEmpresa    : this.porte_empresa,
      nomeResponsavel : this.nome_responsavel,
      senhaEmpresa    : this.senha_empresa
    }

    this.cadastroempresaservice.salvaEmpresa(obj).then((dados:any) => {
      this.nome_fantasia = dados.nomeFantasia;
      this.cnpj_empresa = dados.cnpjEmpresa;
      this.email_empresa = dados.emailEmpresa;
      this.nome_responsavel =  dados.nomeResponsavel,
      this.endereco_empresa = dados.enderecoEmpresa,
      this.porte_empresa = dados.porteEmpresa;
      this.ramo_empresa = dados.ramoEmpresa;
      this.senha_empresa = dados.senhaEmpresa;
    })
  }

  public alertButtons = ['OK'];

}


