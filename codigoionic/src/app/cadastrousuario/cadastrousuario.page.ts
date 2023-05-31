import { Component, OnInit } from '@angular/core';
import { CadastrousuarioService } from '../api/cadastrousuario.service';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
})
export class CadastrousuarioPage {
     
    cpf_usuario :  any;
    email_usuario :  any;
    nome_usuario :  any;
    senha_usuario : any;
    telefone_usuario : any;
    dados: any;
  
  constructor(private cadastrousuarioservice: CadastrousuarioService) {
  
    this.cpf_usuario = '',
    this.email_usuario = '',
    this.nome_usuario = '',
    this.senha_usuario = '',
    this.telefone_usuario = '',
    this.dados = cadastrousuarioservice;
  }

   public salvaUsuario(){
    const obj = {     
      
      cpfUsuario   : this.cpf_usuario,
      emailUsuario : this.email_usuario,
      nomeUsuario  : this.nome_usuario,
      senhaUsuario : this.senha_usuario,
      telefoneUsuario : this.telefone_usuario
    }

    this.cadastrousuarioservice.salvaUsuario(obj).then((dados:any) => {
      this.cpf_usuario = dados.cpfUsuario;
      this.email_usuario = dados.emailUsuario;
      this.nome_usuario = dados.nomeUsuario;
      this.senha_usuario = dados.senhaUsuario;
      this.telefone_usuario = dados.telefoneUsuario;
    })

  }

  public alertButtons = ['OK'];

}
