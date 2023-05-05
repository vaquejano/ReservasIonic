import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  nome: string;
  email: string;
  telefone: string;

  constructor() {
    // Aqui você pode buscar os dados do usuário do seu banco de dados ou de outro serviço.
    // Por enquanto, vamos preencher os campos com alguns dados fictícios.
    this.nome = 'nome';
    this.email = 'joao.silva@email.com';
    this.telefone = '(00) 00000-0000';
  }

  alterarDados() {
    // Aqui você pode abrir uma nova página ou modal para permitir que o usuário altere seus dados.
    // Por enquanto, vamos apenas exibir uma mensagem no console.
    console.log('Alterar dados...');
  }
}
