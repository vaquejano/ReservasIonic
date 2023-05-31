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
  export class PerfilempresaPage implements OnInit {
  
    cod_empresa: number | undefined;
    nome_fantasia: string;
    cnpj_empresa: string;
    email_empresa: string;
    nome_responsavel: string;
    endereco_empresa: string;
    porte_empresa: string;
    ramo_empresa: string;
    senha_empresa: string;
    dados: any;
  
    constructor(private activatedRoute: ActivatedRoute, private dadosservice: DadosService) {
      this.nome_fantasia = '';
      this.cnpj_empresa = '';
      this.email_empresa = '';
      this.nome_responsavel = '';
      this.endereco_empresa = '';
      this.porte_empresa = '';
      this.ramo_empresa = '';
      this.senha_empresa = '';
      this.dados = dadosservice;
    }
  
    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
        if (params['codEmpresa']) {
          this.cod_empresa = Number(params['codEmpresa']);
          console.log('cod_empresa:', this.cod_empresa); // Exibe o valor de cod_empresa no console
          this.getDadoById();
        }
      });
    }
  
    public getDadoById() {
      if (this.cod_empresa) {
        this.dadosservice.getDadoById(this.cod_empresa).then((dados: any) => {
          this.nome_fantasia = dados.nomeFantasia;
          this.cnpj_empresa = dados.cnpjEmpresa;
          this.email_empresa = dados.emailEmpresa;
          this.nome_responsavel = dados.nomeResponsavel;
          this.endereco_empresa = dados.enderecoEmpresa;
          this.porte_empresa = dados.porteEmpresa;
          this.ramo_empresa = dados.ramoEmpresa;
          this.senha_empresa = dados.senhaEmpresa;
        });
      }
    }
  
  }
  
  
  
