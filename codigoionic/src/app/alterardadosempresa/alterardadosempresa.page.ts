import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlterardadosService } from '../api/alterardados.service';

@Component({
  selector: 'app-alterardadosempresa',
  templateUrl: './alterardadosempresa.page.html',
  styleUrls: ['./alterardadosempresa.page.scss'],
})
export class AlterardadosempresaPage {
  public empresaLogada: any = {};

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private alterardadosservice: AlterardadosService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.empresaLogada = params['empresaLogada'];
    });
  }

  alterarDados() {
    this.alterardadosservice.putDados(this.empresaLogada).then(
      (empresa: any) => {
        // Lógica de sucesso
        this.empresaLogada = empresa;
        console.log('Dados atualizados com sucesso!');
        // Navegar para a próxima página
        this.navCtrl.navigateForward('perfilempresa', {
          queryParams: { empresaLogada: this.empresaLogada },
        });
      },
      (error) => {
        // Lógica de erro
        console.error('Erro ao atualizar dados:', error);
      }
    );
  }
}
