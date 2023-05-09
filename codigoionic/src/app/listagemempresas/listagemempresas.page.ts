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
      { codigo: 1, categoria: 1, nome: 'Empresa 1', descricao: 'Restaurante de Pizza', visibled: false, imagem: ['empresa1.jpg', 'empresaa1.jpg']},
      { codigo: 2, categoria: 1, nome: 'Empresa 2', descricao: 'Restaurante de Lanche', visibled: false, imagem: ['empresa2.jpg', 'empresaa2.jpg']},
      { codigo: 3, categoria: 1, nome: 'Empresa 3', descricao: 'Restaurante Japones', visibled: false, imagem: ['empresa3.jpg', 'empresaa3.jpg']},
      { codigo: 4, categoria: 1, nome: 'Empresa 4', descricao: 'Restaurante Chines', visibled: false, imagem: ['empresa4.jpg', 'empresaa4.jpg']},
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
