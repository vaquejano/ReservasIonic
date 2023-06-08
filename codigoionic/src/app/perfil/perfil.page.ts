import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';
import { ListagemempresasPage } from '../listagemempresas/listagemempresas.page';
import { ConexaousuarioService } from '../conexaousuario/conexaousuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  public usuarioLogado : any = {}

  constructor(

    private dadosservice: DadosService, private navCtrl: NavController, private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
  }
}
