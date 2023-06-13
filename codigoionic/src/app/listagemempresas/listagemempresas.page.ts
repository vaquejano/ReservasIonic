import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-listagemempresas',
  templateUrl: './listagemempresas.page.html',
  styleUrls: ['./listagemempresas.page.scss'],
})
export class ListagemempresasPage {

  nome_fantasia: string;
  dados: any;

    public usuarioLogado : any = {}

    public selected = 0;

    public pathImgs = '../../assets/img/';

    public descricaoempresas = [
      { codigo: 1, categoria: 1, nome: 'Pizza Hut', descricao: 'Restaurante de Pizza', visibled: false, imagem: ['pizzahut.png', 'empresaa1.jpg']},
      { codigo: 2, categoria: 1, nome: 'Black Bull', descricao: 'Restaurante de Lanche', visibled: false, imagem: ['blackbull.png', 'empresaa2.jpg']},
      { codigo: 3, categoria: 1, nome: 'Matsuri', descricao: 'Restaurante Japones', visibled: false, imagem: ['matsuri.png', 'empresaa3.jpg']},
      { codigo: 4, categoria: 1, nome: 'Tacos', descricao: 'Restaurante Chines', visibled: false, imagem: ['tacos.png', 'empresaa4.jpg']},
    ]

  constructor(private navCtrl: NavController, private router: Router, private dadosservice: DadosService, private route: ActivatedRoute,) {
    this.setSelected(1);
    this.nome_fantasia = 'nome_fantasia';
    this.dados = dadosservice;
    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
   }

   ngOnInit() {
    this.dados.getAllDados('empresas').then((empresa: { nome_fantasia: string; }) => {
      this.nome_fantasia = empresa.nome_fantasia;
    });
  }

  openPerfil() {
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuarioLogado: this.usuarioLogado },
    });
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
