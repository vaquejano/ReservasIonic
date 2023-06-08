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
    // Aqui você pode implementar a lógica para atualizar os dados no serviço
    this.alterardadosservice.putDados(this.empresaLogada).then(
      (response) => {
        // Lógica de sucesso
        console.log('Dados atualizados com sucesso!');
        // Navegar para a próxima página
        this.navCtrl.navigateForward('perfilempresa');
      },
      (error) => {
        // Lógica de erro
        console.error('Erro ao atualizar dados:', error);
      }
    );
  }
}
