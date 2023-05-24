import { Component, OnInit } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {

  cnpj_empresa : any;
  senha_empresa : any;
 
  constructor(private loginempresaservice: LoginempresaService) { }
  fazerLogin() {
    this.loginempresaservice.verificarCredenciais(this.cnpj_empresa, this.senha_empresa)
      .subscribe(
        (resposta) => {
          console.log('certo')
        },
        (erro) => {
          console.log('errado')
        }
      );
  }
}