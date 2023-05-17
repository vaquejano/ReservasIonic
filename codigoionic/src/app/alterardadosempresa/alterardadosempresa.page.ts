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
    senha_empresa : ''
  }

  constructor() { }

  

}
