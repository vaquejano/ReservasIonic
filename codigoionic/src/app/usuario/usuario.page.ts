import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {


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
