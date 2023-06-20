import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlterardadosusuarioService } from '../api/alterardadosusuario.service';

@Component({
  selector: 'app-alterardados',
  templateUrl: './alterardados.page.html',
  styleUrls: ['./alterardados.page.scss'],
})
export class AlterardadosPage {

  public usuarioLogado: any = {};

  constructor(
    private alterardadosusuarioservice: AlterardadosusuarioService,
    private navCtrl: NavController,
    private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe((params) => {
        this.usuarioLogado = params['usuarioLogado'];
      });
   }

   alterarDados() {
    this.alterardadosusuarioservice.putDados(this.usuarioLogado).then(
      (usuario: any) => {
        // Lógica de sucesso
        this.usuarioLogado = usuario;
        console.log('Dados atualizados com sucesso!');
        // Navegar para a próxima página
        this.navCtrl.navigateForward('perfil', {
          queryParams: { usuarioLogado: this.usuarioLogado },
        });
      },
      (error) => {
        // Lógica de erro
        console.error('Erro ao atualizar dados:', error);
      }
    );
  }
}
