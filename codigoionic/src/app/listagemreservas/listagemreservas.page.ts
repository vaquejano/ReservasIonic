import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';
import { ListagemreservasService } from '../api/listagemreservas.service';

@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage {

  public empresaLogada : any = {}

  public descricaoreservas = [
    { codReserva      : '',
      dataReserva     : '',
      horario         : '',
      quantidadeLugar : '',
      codEmpresa      : '',
      codUsuario      : ''

    }
  ]

  constructor(private router: Router, private listagemreservasservice: ListagemreservasService, private route: ActivatedRoute, private navCtrl: NavController) {

    this.route.queryParams.subscribe((params) => {
      this.empresaLogada = params['empresaLogada'];
      this.listagemreservasservice.getReservas().then((reservas: any) =>{
        this.descricaoreservas = reservas
      })
    });
  }

  openPerfilEmpresa() {
    this.navCtrl.navigateForward('perfilempresa', {
      queryParams: { empresaLogada: this.empresaLogada },
    });
  }
}
