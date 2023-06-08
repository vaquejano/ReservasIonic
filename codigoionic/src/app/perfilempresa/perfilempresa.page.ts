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
}
