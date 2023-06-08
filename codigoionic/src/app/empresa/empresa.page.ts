import { Component, OnInit } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {
  cnpj_empresa: any;
  senha_empresa: any;
  loginBemSucedido = false;

  constructor(
    private loginempresaservice: LoginempresaService,
    private alertController: AlertController,
    private router: Router
  ) {}

fazerLogin() {
    const cnpj = this.cnpj_empresa;
    const senha = this.senha_empresa;

    this.loginempresaservice.verificarCredenciais(cnpj, senha).subscribe(
      (credenciaisValidas) => {
        if (credenciaisValidas) {

          // Login bem-sucedido

         console.log('Login realizado com sucesso');
          this.loginBemSucedido = true;
          this.router.navigate(['/listagemreservas']);
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
