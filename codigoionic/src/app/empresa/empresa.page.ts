import { Component } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {
  cnpj_empresa: any;
  senha_empresa: any;
  loginBemSucedido = false;

  constructor(private loginempresaservice: LoginempresaService) { }

  fazerLogin() {
    const cnpj = this.cnpj_empresa;
    const senha = this.senha_empresa;

    this.loginempresaservice.verificarCredenciais(cnpj, senha).subscribe(
      (credenciaisValidas) => {
        if (credenciaisValidas) {
          // Login bem-sucedido
          console.log('Login realizado com sucesso');
          this.loginBemSucedido = true;
          // Realize as ações necessárias após o login bem-sucedido, como redirecionar para outra página, salvar tokens de autenticação, etc.
        } else {
          // Login falhou
          console.log('Credenciais inválidas');
          this.loginBemSucedido = false;
          // Realize as ações necessárias para lidar com o login falho, como exibir uma mensagem de erro para o usuário, limpar campos de formulário, etc.
        }
      },
      (error) => {
        // Tratar erro de requisição
        console.log('Erro ao verificar credenciais', error);
      }
    );
  }
}
