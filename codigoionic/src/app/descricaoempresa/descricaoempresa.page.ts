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
  public pathImgs = '../../assets/img/';
  public reservas = 0;
  public descricaoempresa = {
    codigo: 0,
    categoria: 0,
    nome: '',
    descricao: '',
    imagem: [],
    visibled: false,
    preco: 10
  };

  data_reserva: any;
  quantidade_lugar: any;
  horario: any;

  constructor(
     private reservausuarioservice: ReservausuarioService,
     private navCtrl: NavController,
     private route: ActivatedRoute,
     public alertController: AlertController) {

      this.data_reserva = '';
      this.quantidade_lugar= '',
      this.horario = '';

    this.route.queryParams.subscribe(params=>{
      this.descricaoempresa = params['descricaoempresa']
    });

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
  }

  public reservando(){
    const obj = {
    dataReserva : this.data_reserva,
    quantidadeLugar : this.quantidade_lugar,
    horario : this.horario
  };

  this.reservausuarioservice.reservando(obj).then((dados:any) => {
})
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
