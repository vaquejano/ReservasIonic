import { Component } from '@angular/core';
import { CadastroempresaService } from '../api/cadastroempresa.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.page.html',
  styleUrls: ['./cadastroempresa.page.scss'],
})
export class CadastroempresaPage {

  nome_fantasia: any;
  cnpj_empresa: any;
  email_empresa: any;
  nome_responsavel: any;
  endereco_empresa: any;
  porte_empresa: any;
  ramo_empresa: any;
  senha_empresa: any;
  dados: any;
  isCadastroEnabled: boolean;

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
  this.isCadastroEnabled = false;
}

  public async salvaEmpresa() {
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

  onKeyUp(event: any) {
    const input = event.target;
    const regex = /[^\d]/g;
    input.value = input.value.replace(regex, '');
    this.cnpj_empresa = input.value;
    this.validarCamposPreenchidos();
  }

  filtrarCampoNome(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.nome_fantasia = input.value;
    this.validarCamposPreenchidos();
  }

  filtrarCampoRamo(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.ramo_empresa = input.value;
    this.validarCamposPreenchidos();
  }

  filtrarCampoResponsavel(event: any) {
    const input = event.target;
    const regex = /[0-9]/g;
    input.value = input.value.replace(regex, '');
    this.nome_responsavel = input.value;
    this.validarCamposPreenchidos();
  }

  validarCamposPreenchidos() {
    this.isCadastroEnabled = (
      this.nome_fantasia !== '' &&
      this.cnpj_empresa !== '' &&
      this.email_empresa !== '' &&
      this.nome_responsavel !== '' &&
      this.endereco_empresa !== '' &&
      this.porte_empresa !== '' &&
      this.ramo_empresa !== '' &&
      this.senha_empresa !== ''
    );
    }
}


