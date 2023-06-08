import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfilempresa',
  templateUrl: './perfilempresa.page.html',
  styleUrls: ['./perfilempresa.page.scss'],
})
export class PerfilempresaPage {

  public empresaLogada: any = {}

  constructor(

    private dadosservice: DadosService, private navCtrl: NavController, private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((params) => {
      this.empresaLogada = params['empresaLogada'];
    });

  }

  alterarDados() {
    this.navCtrl.navigateForward('alterardadosempresa', {
      queryParams: { empresaLogada: this.empresaLogada },
    });
  }

  deletarDados() {
    const confirmar = confirm('Tem certeza de que deseja deletar sua conta?');
  
    if (confirmar) {
      this.dadosservice.deleteDados(this.empresaLogada).then((empresa: any) => {
        this.empresaLogada = empresa;
        console.log('Empresa deletada com sucesso!');
        this.navCtrl.navigateForward('home')
      });
    } else {
      console.log('Evento deletar conta cancelado!')
    }
  }

}
