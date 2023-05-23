import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listagemempresas',
  templateUrl: './listagemempresas.page.html',
  styleUrls: ['./listagemempresas.page.scss'],
})
export class ListagemempresasPage {

    public selected = 0;

    

    public pathImgs = '../../assets/img/';

    public descricaoempresas = [
      { codigo: 1, categoria: 1, nome: 'Pizza Hut', descricao: 'Restaurante de Pizza', visibled: false, imagem: ['pizzahut.png', 'empresaa1.jpg']},
      { codigo: 2, categoria: 1, nome: 'Black Bull', descricao: 'Restaurante de Lanche', visibled: false, imagem: ['blackbull.png', 'empresaa2.jpg']},
      { codigo: 3, categoria: 1, nome: 'Matsuri', descricao: 'Restaurante Japones', visibled: false, imagem: ['matsuri.png', 'empresaa3.jpg']},
      { codigo: 4, categoria: 1, nome: 'Tacos', descricao: 'Restaurante Chines', visibled: false, imagem: ['tacos.png', 'empresaa4.jpg']},
    ]

    

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
   }

   public goDescricaoempresa(descricaoempresa:any){
    this.navCtrl.navigateForward('descricaoempresa',{
      queryParams: { descricaoempresa: descricaoempresa}
    });
  }

  public setSelected(codigoCategoria: number) {
    this.selected = codigoCategoria;

    this.descricaoempresas.map(el => el.visibled = false);

    this.descricaoempresas
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

}
