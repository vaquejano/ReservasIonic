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

 
  dados: any;

    public usuarioLogado : any = {}

    public descricaoempresas = [
      { codEmpresa      : '',
        nomeFantasia    : '',
        cnpjEmpresa     : '',
        emailEmpresa    : '',
        enderecoEmpresa : '',
        nomeResponsavel : '',
        porteEmpresa    : '',
        ramoEmpresa     : '',
        visibled        : false,
        imagemEmpresa   : ''
      }]

  constructor(private navCtrl: NavController, private router: Router, private dadosservice: DadosService, private route: ActivatedRoute,) {

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
      this.dadosservice.getEmpresas().then((empresa: any) => {
      this.descricaoempresas = empresa;

        console.log(this.descricaoempresas)
      });
    });
   }

   ngOnInit() {
    
  }

  openPerfil() {
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuarioLogado: this.usuarioLogado },
    });
  }

   public goDescricaoempresa(descricaoempresa:any, usuarioLogado: any){
    console.log(descricaoempresa)
    this.navCtrl.navigateForward('descricaoempresa',{
      queryParams: { descricaoempresa: descricaoempresa, usuarioLogado: usuarioLogado}
    });
  }
  
 
}
