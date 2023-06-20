import { Component, ViewChild } from '@angular/core';
import { CadastrousuarioService } from '../api/cadastrousuario.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cadastrousuario',
  templateUrl: './cadastrousuario.page.html',
  styleUrls: ['./cadastrousuario.page.scss'],
})
export class CadastrousuarioPage {

    cpf_usuario :  any;
    email_usuario :  string;
    nome_usuario :  any;
    senha_usuario : any;
    telefone_usuario : any;
    dados: any;
    @ViewChild('cpfInput', { static: false }) cpfInput!: NgModel;

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
  }

  public async salvaUsuario() {
    if (
      !this.cpf_usuario ||
      !this.email_usuario ||
      !this.nome_usuario ||
      !this.senha_usuario ||
      !this.telefone_usuario
    ) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Preencha todos os campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const emailRegex = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?/;
    if (!emailRegex.test(this.email_usuario)) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Informe um e-mail válido.',
        buttons: ['OK'],
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
    let value = input.value.replace(regex, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    input.value = value;
    this.cpf_usuario = value;
 }

  filtrarCampoNome(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.nome_usuario = input.value;
  }

  filtraCampoTel(event: any) {
    const input = event.target;
    const regex = /[^\d]/g;
    let value = input.value.replace(regex, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    input.value = value;
    this.telefone_usuario = value;
}
}
