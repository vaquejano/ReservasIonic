import { Component, OnInit } from '@angular/core';
import { LoginusuarioService } from '../api/loginusuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage {
  cpf_usuario: any;
  senha_usuario: any;
  loginBemSucedido = false;

  constructor(
    private loginusuarioservice: LoginusuarioService,
    private alertController: AlertController,
    private router: Router
  ) { }

  fazerLogin() {
    const cpf = this.cpf_usuario;
    const senha = this.senha_usuario;

    this.loginusuarioservice.verificarCredenciais(cpf, senha).subscribe(
      (credenciaisValidas) => {
        if (credenciaisValidas) {

          // Login bem-sucedido

          console.log('Login realizado com sucesso');
          this.loginBemSucedido = true;
          this.router.navigate(['/listagemempresas']);
        } else {

          // Login falhou

          console.log('Credenciais inválidas');
          this.loginBemSucedido = false;
          this.exibirAlerta('Dados incorretos');
        }
      },
      (error) => {

        // Tratar erro de requisição

        console.log('Erro ao verificar credenciais', error);
      }
    );
  }

  async exibirAlerta(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}
