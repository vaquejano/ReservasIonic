import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {


  public usuario = {
    cod_usuario : 0,
    cpf_usuario : '',
    email_usuario : '',
    nome_usuario : '',
    senha_usuario : ''
  }

  constructor() { }


  ngOnInit(): void {
  }

}
