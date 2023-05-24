import { Component, OnInit } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {

  cnpjEmpresa : any;
  senhaEmpresa : any;
 
  constructor(private loginempresaservice: LoginempresaService) { }
  verificarCredenciais() {
    this.loginempresaservice.verificarCredenciais(this.cnpjEmpresa, this.senhaEmpresa)
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