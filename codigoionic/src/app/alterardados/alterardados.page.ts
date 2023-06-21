import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AlterardadosusuarioService } from '../api/alterardadosusuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterardados',
  templateUrl: './alterardados.page.html',
  styleUrls: ['./alterardados.page.scss'],
})
export class AlterardadosPage {

  public usuarioLogado: any = {}
  

  constructor(
    private alterardadosusuarioservice: AlterardadosusuarioService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private route: ActivatedRoute,
  ) { 
    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
  }

  

  async alterarDados() {
    const emailRegex = /[a-z0-9_.-]+@[a-z0-9]+\.[a-z]{2,}(?:\.[a-z]{2,})?/;
    if (!emailRegex.test(this.usuarioLogado.emailUsuario)) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'E-mail inválido. Preencha corretamente.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.alterardadosusuarioservice.putDados(this.usuarioLogado).then(
      (usuario: any) => {
        this.exibirAlertaSucesso().then(() => {
        console.log('Dados atualizados com sucesso!');
        this.navCtrl.navigateForward('perfil', {
          queryParams: { usuarioLogado: this.usuarioLogado },
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

  
}
