import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-descricaoempresa',
  templateUrl: './descricaoempresa.page.html',
  styleUrls: ['./descricaoempresa.page.scss'],
})
export class DescricaoempresaPage {

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

  constructor(private route: ActivatedRoute, public alertController: AlertController) { 
    this.route.queryParams.subscribe(params=>{
      this.descricaoempresa = params['descricaoempresa']
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
