import { Component, OnInit } from '@angular/core';
import { LoginusuarioService } from '../api/loginusuario.service';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage {
  cpfUsuario: any;
  senhaUsuario: any;
  codUsuario: any;
  usuarioLogado: any;
  loginBemSucedido = false;

  constructor(
    private loginusuarioservice: LoginusuarioService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  fazerLogin() {
    const cpf = this.cpfUsuario;
    const senha = this.senhaUsuario;
    const codUsuario =  this.codUsuario;

     this.loginusuarioservice.verificarCredenciais(cpf, senha).then(
      (usuario: any) => {

        if (usuario) {

          // Login bem-sucedido

         console.log('Login realizado com sucesso');
          this.loginBemSucedido = true;
          this.loginusuarioservice.getId(usuario.codUsuario).then(usuario => {
            this.usuarioLogado = usuario;
            this.navCtrl.navigateForward('listagemempresas', {
              queryParams: { usuarioLogado: this.usuarioLogado },
            });
          });
        } else {

          // Login falhou

          console.log('Credenciais inválidas')
          this.loginBemSucedido = false;
          this.exibirAlerta('Dados incorretos')
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

  onKeyUp(event: { key: string; }) {
    if (event.key === 'Enter') {
      this.fazerLogin();
    }
  }

}