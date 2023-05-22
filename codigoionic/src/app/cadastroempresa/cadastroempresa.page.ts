import { Component, OnInit } from '@angular/core';
import { CadastroempresaService } from '../api/cadastroempresa.service';


@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.page.html',
  styleUrls: ['./cadastroempresa.page.scss'],
})
export class CadastroempresaPage {

  nome_fantasia: string;
  cnpj_empresa: number;
  email_empresa: string;
  nome_responsavel: string;
  endereco_empresa: string;
  porte_empresa: string;
  ramo_empresa: string;
  senha_empresa: string;
  dados: any;



  

  constructor(private cadastroempresaservice: CadastroempresaService) { 

  this.nome_fantasia = '';
  this.cnpj_empresa = 0;
  this.email_empresa = '';
  this.nome_responsavel = '',
  this.endereco_empresa = '',
  this.porte_empresa = '';
  this.ramo_empresa = '';
  this.senha_empresa = '';
  this.dados = cadastroempresaservice;
  this.postDados();
  }

  public postDados(){
    this.cadastroempresaservice.postDados(0).then((dados:any) => {
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


  public alertButtons = ['OK'];

}


