import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ReservausuarioService } from '../api/reservausuario.service';

@Component({
  selector: 'app-descricaoempresa',
  templateUrl: './descricaoempresa.page.html',
  styleUrls: ['./descricaoempresa.page.scss'],
})
export class DescricaoempresaPage {
  public usuarioLogado: any = {}



  public descricaoempresa: any = {};

  public reserv = {
    codReserva: 0,
    quantidadeLugar: 0,
    dataReserva: '',
    horario: '',

    usuario: {
      codUsuario: 0,
      cpfUsuario: '',
      emailUsuario: '',
      nomeUsuario: '',
      senhaUsuario: '',
      telefoneUsuario: ''
    },
    empresa: {
      codEmpresa: 0,
      cardapioEmpresa: '',
      cnpjEmpresa: '',
      emailEmpresa: '',
      enderecoEmpresa: '',
      imagemEmpresa: '',
      nomeFantasia: '',
      nomeResponsavel: '',
      porteEmpresa: '',
      ramoEmpresa: '',
      senhaEmpresa: ''
    },
  }





  constructor(
    private reservausuarioservice: ReservausuarioService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public alertController: AlertController) {





    this.route.queryParams.subscribe(params => {
      this.descricaoempresa = params['descricaoempresa']
    });

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
  }


  formatarData(event: any) {
    const valorDigitado = event.target.value;
    const data = new Date(valorDigitado);
    const dataReserva = data.toISOString().split('T')[0];
    this.reserv.dataReserva = dataReserva;
  }



  public reservando() {
    this.reserv.codReserva = this.reserv.codReserva;
    this.reserv.dataReserva = this.reserv.dataReserva;
    this.reserv.quantidadeLugar = this.reserv.quantidadeLugar;
    this.reserv.horario = this.reserv.horario;
    this.reserv.empresa = this.descricaoempresa;
    this.reserv.usuario = this.usuarioLogado;


    this.reservausuarioservice.reservando(this.reserv).then((dados: any) => {
      this.reserv.codReserva = dados.codReserva;
      this.reserv.dataReserva = dados.dataReserva;
      this.reserv.quantidadeLugar = dados.quantidadeLugar;
      this.reserv.horario = dados.horario;
      this.reserv.empresa = dados.descricaoempresa
      this.reserv.usuario = dados.usuarioLogado
      this.navCtrl.navigateForward('listagemempresas', {
        queryParams: { usuarioLogado: this.usuarioLogado },
      });
      this.mostrarAlerta();
    });
  }

  async mostrarAlerta() {
    const alerta = await this.alertController.create({
      header: 'Foi Reservado Com Sucesso!',
      buttons: ['OK']
    });

    await alerta.present();
  }

  somenteNumeros(event: any) {
    const allowedKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

    const key = event.key;
    const isAllowed = /^[0-9]$/.test(key) || allowedKeys.includes(key);

    if (!isAllowed) {
      event.preventDefault();
    }
  }
}
