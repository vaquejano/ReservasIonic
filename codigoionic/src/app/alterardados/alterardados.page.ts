import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AlterardadosusuarioService } from '../api/alterardadosusuario.service';

@Component({
  selector: 'app-alterardados',
  templateUrl: './alterardados.page.html',
  styleUrls: ['./alterardados.page.scss'],
})
export class AlterardadosPage implements OnInit {

  public usuarioLogado: any = {};
  public emailRegex: string = "[a-z0-9_.-]+@[a-z0-9]+\\.[a-z]{2,}(?:\\.[a-z]{2,})?";

  constructor(
    private alterardadosusuarioservice: AlterardadosusuarioService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async alterarDados() {
    if (!this.validateEmail(this.usuarioLogado.email_usuario)) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Insira um endereço de e-mail válido.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.alterardadosusuarioservice.putDados(this.usuarioLogado)
      .then((usuario: any) => {

        this.usuarioLogado = usuario;
        console.log('Dados atualizados com sucesso!');

        this.mostrarAlerta('Sucesso', 'Alteração concluída..', () => {
          this.navCtrl.navigateForward('perfil', {
            queryParams: { usuarioLogado: this.usuarioLogado },
          });
        });
      })
      .catch((error) => {
        console.error('Erro ao atualizar dados:', error);
      });
  }

  async mostrarAlerta(header: string, message: string, callback?: () => void) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (callback) {
              callback();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  validateEmail(email: string): boolean {
    const regex = new RegExp(this.emailRegex);
    return regex.test(email);
  }
}
