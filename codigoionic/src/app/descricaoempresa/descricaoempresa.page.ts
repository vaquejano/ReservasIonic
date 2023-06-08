import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';
import { ListagemempresasPage } from '../listagemempresas/listagemempresas.page';
import { AlertController } from '@ionic/angular';

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
  }

  constructor(
    private dadosservice: DadosService, private navCtrl: NavController, private route: ActivatedRoute, public alertController: AlertController) {
    this.route.queryParams.subscribe(params=>{
      this.descricaoempresa = params['descricaoempresa']
    });

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });

  }

  async mostrarAlerta() {
    const alerta = await this.alertController.create({
      header: 'Foi Reservado Com Sucesso!',
      buttons: ['OK']
    });

    await alerta.present();
  }


  public add(){
    this.reservas += 1;
  }

  public remove(){
    if(this.reservas > 0){
      this.reservas -= 1;
    }
  }

}
