import { Component } from '@angular/core';
import { LoginempresaService } from '../api/loginempresa.service';
import { AlertController, NavController } from '@ionic/angular';
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
  empresaLogada: any
  empresa : any
  codEmpresa2: any

  constructor(
    private loginempresaservice: LoginempresaService,
    private alertController: AlertController,
    private router: Router,
    private navCtrl: NavController
  ) {}


  


  fazerLogin() {
    const cnpj = this.cnpjEmpresa;
    const senha = this.senhaEmpresa;
    const codEmpresa = this.codEmpresa;
    

    this.loginempresaservice.verificarCredenciais(cnpj, senha).then(
      (empresa: any) => {
        if (empresa) {
          // Login bem-sucedido
          
          this.loginBemSucedido = true;
          
          // fazer um metoo getbyid
          this.loginempresaservice.getId(empresa.codEmpresa).then(emprexa => {
            this.empresaLogada = emprexa;
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



  // enviarDados(codEmpresa: any) {
  //   this.navCtrl.navigateForward('listagemreservas', {
  //     queryParams: { codEmpresa: codEmpresa },
  //   });
  // }
}
