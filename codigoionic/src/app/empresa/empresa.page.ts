import { Component } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {
  cnpjEmpresa: any;
  senhaEmpresa: any;
  codEmpresa: any;
  loginBemSucedido = false;

  constructor(
    private loginempresaservice: LoginempresaService,
    private alertController: AlertController,
    private router: Router
  ) { }

  fazerLogin() {
    const cnpj = this.cnpjEmpresa;
    const senha = this.senhaEmpresa;
    const id = this.codEmpresa;

    this.loginempresaservice.verificarCredenciais(cnpj, senha).then(
      (empresa) => {
        if (empresa) {
          console.log('apareceu o carai da empresa')
          console.log(empresa)
          // Login bem-sucedido
          
          this.loginBemSucedido = true;
          this.router.navigate(['/listagemreservas']);
          // fazer um metoo getbyid
          this.loginempresaservice.getId(id);
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
