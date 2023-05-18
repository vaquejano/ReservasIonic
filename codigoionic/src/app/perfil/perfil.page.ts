import { Component } from '@angular/core';
import { ConexaousuarioService } from '../conexaousuario/conexaousuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  nome_usuario: string;
  email_usuario: string;
  cpf_usuario: number;
  senha_usuario: string;
  dados: any;

  constructor(private conexaousuarioservice: ConexaousuarioService) {
    // Aqui você pode buscar os dados do usuário do seu banco de dados ou de outro serviço.
    // Por enquanto, vamos preencher os campos com alguns dados fictícios.
    this.nome_usuario = '';
    this.email_usuario = '';
    this.cpf_usuario = 0;
    this.senha_usuario = '';
  }

  getAllDados() {
    this.dados.getAllDados('usuarios').then((usuario: { nome_usuario: string; cpf_usuario: number; email_usuario: string; senha_usuario: string; }) => {
      this.nome_usuario = usuario.nome_usuario;
      this.email_usuario = usuario.email_usuario;
      this.cpf_usuario = usuario.cpf_usuario;
      this.senha_usuario = usuario.senha_usuario;

    });

  }
}
