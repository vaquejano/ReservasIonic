import { Component, ViewChild } from '@angular/core';
import { CadastroempresaService } from '../api/cadastroempresa.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.page.html',
  styleUrls: ['./cadastroempresa.page.scss'],
})
export class CadastroempresaPage {

  nome_fantasia: any;
  cnpj_empresa: any;
  email_empresa: string;
  nome_responsavel: any;
  endereco_empresa: any;
  porte_empresa: any;
  ramo_empresa: any;
  senha_empresa: any;
  dados: any;
  @ViewChild('cnpjInput', { static: false }) cpfInput!: NgModel;

  constructor(
    private cadastroempresaservice: CadastroempresaService,
    private alertController: AlertController,
    private router: Router
    ) {

  this.nome_fantasia = '';
  this.cnpj_empresa = '';
  this.email_empresa = '';
  this.nome_responsavel = '',
  this.endereco_empresa = '',
  this.porte_empresa = '';
  this.ramo_empresa = '';
  this.senha_empresa = '';
  this.dados = cadastroempresaservice;
}

  public async salvaEmpresa() {
    if (
      !this.nome_fantasia ||
      !this.cnpj_empresa ||
      !this.email_empresa ||
      !this.nome_responsavel ||
      !this.endereco_empresa ||
      !this.porte_empresa ||
      !this.ramo_empresa ||
      !this.senha_empresa
    ) {
      const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Preencha todos os campos.',
      buttons: ['OK']
    });
    await alert.present();
    return;
  }

  const emailRegex = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?/;
    if (!emailRegex.test(this.email_empresa)) {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Informe um e-mail válido.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const obj = {
      nomeFantasia    : this.nome_fantasia,
      cnpjEmpresa     : this.cnpj_empresa,
      enderecoEmpresa : this.endereco_empresa,
      emailEmpresa    : this.email_empresa,
      ramoEmpresa      : this.ramo_empresa,
      porteEmpresa    : this.porte_empresa,
      nomeResponsavel : this.nome_responsavel,
      senhaEmpresa    : this.senha_empresa
    };

    this.cadastroempresaservice.salvaEmpresa(obj).then((dados:any) => {
      this.nome_fantasia = dados.nomeFantasia;
      this.cnpj_empresa = dados.cnpjEmpresa;
      this.email_empresa = dados.emailEmpresa;
      this.nome_responsavel =  dados.nomeResponsavel,
      this.endereco_empresa = dados.enderecoEmpresa,
      this.porte_empresa = dados.porteEmpresa;
      this.ramo_empresa = dados.ramoEmpresa;
      this.senha_empresa = dados.senhaEmpresa;

      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Finalizado',
      message: 'Cadastro concluído!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/empresa');
          }
        }
      ]
    });
    await alert.present();
  }

  filtrarCampoCnpj(event: any) {
    const input = event.target;
    const regex = /[^\d]/g;
    let value = input.value.replace(regex, '');

    if (value.length > 14) {
      value = value.slice(0, 14);
    }

    input.value = value;
    this.cnpj_empresa = value;
  }

  filtrarCampoNome(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.nome_fantasia = input.value;
  }

  filtrarCampoRamo(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.ramo_empresa = input.value;
  }

  filtrarCampoResponsavel(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.nome_responsavel = input.value;
  }
}


