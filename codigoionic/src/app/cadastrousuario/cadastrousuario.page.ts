import { Component, OnInit } from '@angular/core';
import { CadastrousuarioService } from '../api/cadastrousuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
})
export class CadastrousuarioPage {

    cpf_usuario :  any;
    email_usuario :  any;
    nome_usuario :  any;
    senha_usuario : any;
    telefone_usuario : any;
    dados: any;
    isCadastroEnabled: boolean;

  constructor(
    private cadastrousuarioservice: CadastrousuarioService,
    private alertController: AlertController,
    private router: Router
    ) {

    this.cpf_usuario = '',
    this.email_usuario = '',
    this.nome_usuario = '',
    this.senha_usuario = '',
    this.telefone_usuario = '',
    this.dados = cadastrousuarioservice;
    this.isCadastroEnabled = false;
  }

  public async salvaUsuario() {
    if (!this.isCadastroEnabled) {
      const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Preencha todos os campos corretamente.',
      buttons: ['OK']
    });
    await alert.present();
    return;
  }
    const obj = {

      cpfUsuario   : this.cpf_usuario,
      emailUsuario : this.email_usuario,
      nomeUsuario  : this.nome_usuario,
      senhaUsuario : this.senha_usuario,
      telefoneUsuario : this.telefone_usuario
    }

    this.cadastrousuarioservice.salvaUsuario(obj).then((dados:any) => {
      this.cpf_usuario = dados.cpfUsuario;
      this.email_usuario = dados.emailUsuario;
      this.nome_usuario = dados.nomeUsuario;
      this.senha_usuario = dados.senhaUsuario;
      this.telefone_usuario = dados.telefoneUsuario;

      this.presentAlert();
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Finalizado',
      message: 'Cadastro concluído!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/usuario');
          }
        }
      ]
    });
    await alert.present();
  }

  filtraCampoCpf(event: any) {
    const input = event.target;
    const regex = /[^\d]/g;
    input.value = input.value.replace(regex, '');
    this.cpf_usuario = input.value;
    this.validarCamposPreenchidos();
  }

  filtrarCampoNome(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.nome_usuario = input.value;
    this.validarCamposPreenchidos();
  }

  filtraCampoTel(event: any) {
    const input = event.target;
    const regex = /[^\d]/g;
    input.value = input.value.replace(regex, '');
    this.telefone_usuario = input.value;
    this.validarCamposPreenchidos();
  }

  validarCamposPreenchidos() {
    this.isCadastroEnabled = (
      this.nome_usuario !== '' &&
      this.cpf_usuario !== '' &&
      this.email_usuario !== '' &&
      this.senha_usuario !== ''
    );
    }
}
