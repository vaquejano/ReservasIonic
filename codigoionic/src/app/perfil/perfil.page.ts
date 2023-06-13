import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  public usuarioLogado : any = {}

  constructor(

    private dadosservice: DadosService, private navCtrl: NavController, private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe((params) => {
      this.usuarioLogado = params['usuarioLogado'];
    });
  }

  alterarDados() {
    this.navCtrl.navigateForward('alterardados', {
      queryParams: { usuarioLogado: this.usuarioLogado },
    });
  }

  deletarDados() {
    const confirmar = confirm('Tem certeza de que deseja deletar sua conta?');
  
    if (confirmar) {
      this.dadosservice.deleteDados(this.usuarioLogado).then((usuario: any) => {
        this.usuarioLogado = usuario;
        console.log('Usuário deletada com sucesso!');
        this.navCtrl.navigateForward('home')
      });
    } else {
      console.log('Evento deletar conta cancelado!')
    }
  }

}
