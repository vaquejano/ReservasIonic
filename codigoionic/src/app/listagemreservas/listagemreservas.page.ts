import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage {

  public empresaLogada : any = {}

  constructor(private router: Router, private dadosservice: DadosService, private route: ActivatedRoute, private navCtrl: NavController) {

    this.route.queryParams.subscribe((params) => {
      this.empresaLogada = params['empresaLogada'];
    });

  }

  openPerfilEmpresa() {
    this.navCtrl.navigateForward('perfilempresa', {
      queryParams: { empresaLogada: this.empresaLogada },
    });
  }




}
