import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { AlterardadosService } from '../api/alterardados.service';

@Component({
  selector: 'app-alterardadosempresa',
  templateUrl: './alterardadosempresa.page.html',
  styleUrls: ['./alterardadosempresa.page.scss'],
})
export class AlterardadosempresaPage {

  public empresaLogada: any = {};

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private alterardadosservice: AlterardadosService,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe((params) => {
      this.empresaLogada = params['empresaLogada'];
    });
  }

  async alterarDados() {
    const emailRegex = /[a-z0-9_.-]+@[a-z0-9]+\.[a-z]{2,}(?:\.[a-z]{2,})?/;
    if (!emailRegex.test(this.empresaLogada.emailEmpresa)) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'E-mail inválido. Preencha corretamente.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.alterardadosservice.putDados(this.empresaLogada).then(
      (empresa: any) => {
        this.exibirAlertaSucesso().then(() => {
        console.log('Dados atualizados com sucesso!');
        this.navCtrl.navigateForward('perfilempresa', {
          queryParams: { empresaLogada: this.empresaLogada },
        });
      });
      },
      (error) => {
        console.error('Erro ao atualizar dados:', error);
      }
    );
  }

  async exibirAlertaSucesso() {
    return new Promise<void>(async (resolve) => {
    const alert = await this.alertController.create({
      header: 'Finalizado',
      message: 'Alteração concluída!',
      buttons: [{
        text: 'OK',
        handler: () => {
          resolve();
        }
      }]
    });
    await alert.present();
  });
  }

  validaNome(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.keyCode || event.which);

    if (pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  validaResponsavel(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.keyCode || event.which);

    if (pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
