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
  public usuarioLogado : any = {}


  
  public descricaoempresa : any  = {};



  public reservas = 0;
empresa : any;
codEmpresa        : any;
data_reserva      : any;
quantidade_lugar  : any;
horario           : any;
dados             : any;

  

  constructor(
     private reservausuarioservice: ReservausuarioService,
     private navCtrl: NavController,
     private route: ActivatedRoute,
     public alertController: AlertController) {

      this.data_reserva = '';
      this.quantidade_lugar= '',
      this.horario = '';
     
      this.dados = reservausuarioservice;
      


    this.route.queryParams.subscribe(params=>{
      this.descricaoempresa = params['descricaoempresa']
      this.codEmpresa = this.descricaoempresa.codEmpresa;
    });

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
  }


  formatarData(event: any) {
    const valorDigitado = event.target.value;
    const data = new Date(valorDigitado);
    const dataReserva = data.toISOString().split('T')[0];
    this.data_reserva = dataReserva;
  }


  // public reservando() {
  //   this.reservausuarioservice.getId(this.descricaoempresa).then((codEmpresa: string) => {
  //     const obj = {
  //       dataReserva: this.data_reserva,
  //       quantidadeLugar: this.quantidade_lugar,
  //       horario: this.horario,
  //       codEmpresa: codEmpresa
  //     };
  
  //     this.reservausuarioservice.reservando(obj).then((dados: any) => {
  //       this.data_reserva = dados.dataReserva;
  //       this.quantidade_lugar = dados.quantidadeLugar;
  //       this.horario = dados.horario;
  //       this.descricaoempresa.codEmpresa = dados.descricaoempresa.codEmpresa
  //       // Lógica adicional após a reserva ser salva no banco de dados
  //     });
  //   });
  // }

  public reservando() {
    const obj = {
      dataReserva: this.data_reserva,
      quantidadeLugar: this.quantidade_lugar,
      horario: this.horario,
      codEmpresa: this.descricaoempresa.codEmpresa ,
      empresa: this.descricaoempresa.codEmpresa // Alterei para utilizar o atributo correto
    };
  
    this.reservausuarioservice.reservando(obj).then((dados: any) => {
      this.data_reserva = dados.dataReserva;
      this.quantidade_lugar = dados.quantidadeLugar;
      this.horario = dados.horario;
      this.empresa = dados.empresa;
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
