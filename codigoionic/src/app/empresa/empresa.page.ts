import { Component } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage {
  cnpjEmpresa: any;
  senhaEmpresa: any;
  codEmpresa: any;
  empresaLogada: any;
  loginBemSucedido = false;

  

  constructor(
    private loginempresaservice: LoginempresaService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  fazerLogin() {
    const cnpj = this.cnpjEmpresa;
    const senha = this.senhaEmpresa;
    

    this.loginempresaservice.verificarCredenciais(cnpj, senha).then(
      (empresa: any) => {

        if (empresa) {

          // Login bem-sucedido

         console.log('Login realizado com sucesso');
          this.loginBemSucedido = true;
          this.loginempresaservice.getId(empresa.codEmpresa).then(empresa => {
            this.empresaLogada = empresa;
            this.navCtrl.navigateForward('listagemreservas', {
              queryParams: { empresaLogada: this.empresaLogada },
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

  onKeyUp(event: any) {
    const input = event.target;
    const regex = /[^\d]/g;
    input.value = input.value.replace(regex, '');
    this.cnpjEmpresa = input.value;
  }

}
