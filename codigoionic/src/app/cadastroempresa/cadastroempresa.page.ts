import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.page.html',
  styleUrls: ['./cadastroempresa.page.scss'],
})
export class CadastroempresaPage implements OnInit {


  public empresa = {
    cod_empresa : 0,
    nome_fantasia : '',
    cnpj_empresa : '',
    email_empresa : '',
    nome_responsavel: '',
    porte_empresa : '',
    ramo_empresa : '',
    senha_empresa : ''
  }

  constructor() { }

  public alertButtons = ['OK'];

  ngOnInit() {
  }

}
