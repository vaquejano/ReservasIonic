import { Component } from '@angular/core';

@Component({
  selector: 'app-alterardadosempresa',
  templateUrl: './alterardadosempresa.page.html',
  styleUrls: ['./alterardadosempresa.page.scss'],
})
export class AlterardadosempresaPage{

  public empresa = {
    nome_fantasia : '',
    email_empresa : '',
    nome_responsavel : '',
    endereco_empresa : '',
    senha_empresa : ''
  }

  constructor() { }



}
