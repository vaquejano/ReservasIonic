// import { Component, OnInit } from '@angular/core';
// import { DadosService } from '../api/dados.service';

// @Component({
//   selector: 'app-perfilempresa',
//   templateUrl: './perfilempresa.page.html',
//   styleUrls: ['./perfilempresa.page.scss'],
// })
// export class PerfilempresaPage {

//   cod_empresa: any;
//   nome_fantasia: string;
//   cnpj_empresa: string;
//   email_empresa: string;
//   nome_responsavel: string;
//   endereco_empresa: string;
//   porte_empresa: string;
//   ramo_empresa: string;
//   senha_empresa: string;
//   dados: any;


//   constructor(private dadosservice: DadosService) {
//     // Aqui você pode buscar os dados do usuário do seu banco de dados ou de outro serviço.
//     // Por enquanto, vamos preencher os campos com alguns dados fictícios.
//     this.cod_empresa = ''
//     this.nome_fantasia = '';
//     this.cnpj_empresa = '';
//     this.email_empresa = '';
//     this.nome_responsavel = '',
//     this.endereco_empresa = '',
//     this.porte_empresa = '';
//     this.ramo_empresa = '';
//     this.senha_empresa = '';
//     this.dados = dadosservice;
//     this.getDadoById();
//   }



  // public getDadoById(){
  //   const id ={
  //     codEmpresa : this.cod_empresa
  //   }

  //   this.dadosservice.getDadoById(id).then((dados:any) => {
  //     this.nome_fantasia = dados.nomeFantasia;
  //     this.cnpj_empresa = dados.cnpjEmpresa;
  //     this.email_empresa = dados.emailEmpresa;
  //     this.nome_responsavel =  dados.nomeResponsavel;
  //     this.endereco_empresa = dados.enderecoEmpresa;
  //     this.porte_empresa = dados.porteEmpresa;
  //     this.ramo_empresa = dados.ramoEmpresa;
  //     this.senha_empresa = dados.senhaEmpresa;
  //   })
  // }

  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { DadosService } from '../api/dados.service';

  @Component({
    selector: 'app-perfilempresa',
    templateUrl: './perfilempresa.page.html',
    styleUrls: ['./perfilempresa.page.scss'],
  })
  export class PerfilempresaPage  {

    public empresa = {
      codEmpresa: '',
      nomeFantasia: '',
      cnpjEmpresa: '',
      emailEmpresa: '',
      nomeResponsavel: '',
      enderecoEmpresa: '',
      porteEmpresa: '',
      ramoEmpresa: '',
      senhaEmpresa: '',
      empresa: ''
    }

    constructor(
      
      private dadosservice: DadosService,
      ){

    }

   
    public getDadoById() {
      {
        this.dadosservice.getDadoById(this.empresa.codEmpresa).then((empresa: any) => {
          this.empresa.codEmpresa = empresa.codEmpresa;
          this.empresa.nomeFantasia = empresa.nomeFantasia;
          this.empresa.cnpjEmpresa = empresa.cnpjEmpresa;
          this.empresa.emailEmpresa = empresa.emailEmpresa;
          this.empresa.nomeResponsavel = empresa.nomeResponsavel;
          this.empresa.enderecoEmpresa = empresa.enderecoEmpresa;
          this.empresa.porteEmpresa = empresa.porteEmpresa;
          this.empresa.ramoEmpresa = empresa.ramoEmpresa;
          this.empresa.senhaEmpresa = empresa.senhaEmpresa;
        });
        
      }
    }
  }
