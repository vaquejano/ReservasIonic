import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cardapioempresa',
  templateUrl: './cardapioempresa.page.html',
  styleUrls: ['./cardapioempresa.page.scss'],
})
export class CardapioempresaPage {

  descricaoempresa: any = {}

  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController) {


    this.route.queryParams.subscribe(params => {
      this.descricaoempresa = params['descricaoempresa']
    });
  }






}
