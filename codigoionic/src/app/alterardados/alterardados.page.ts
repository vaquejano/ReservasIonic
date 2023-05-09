import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alterardados',
  templateUrl: './alterardados.page.html',
  styleUrls: ['./alterardados.page.scss'],
})
export class AlterardadosPage implements OnInit {

  public usuario = {
    cod_usuario : 0,
    cpf_usuario : 0,
    email_usuario : '',
    nome_usuario : '',
    senha_usuario : ''
  }

  constructor() { }

  ngOnInit() {
  }

}
