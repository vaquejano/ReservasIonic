import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';

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
