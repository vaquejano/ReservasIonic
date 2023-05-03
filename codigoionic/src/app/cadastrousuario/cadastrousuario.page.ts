import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
})
export class CadastrousuarioPage implements OnInit {

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
