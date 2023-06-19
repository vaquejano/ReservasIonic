import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosUsuarioService } from '../api/dadosusuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  public usuarioLogado : any = {}

  constructor(

    private dadosusuarioservice: DadosUsuarioService, private navCtrl: NavController, private route: ActivatedRoute
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

  deletarDadosUsuario() {
    const confirmar = confirm('Tem certeza de que deseja deletar sua conta?');

    if (confirmar) {
      this.dadosusuarioservice.deleteDadosUsuario(this.usuarioLogado).then((usuario: any) => {
        this.usuarioLogado = usuario;
        console.log('Usuário deletado com sucesso!');
        this.navCtrl.navigateForward('home')
      });
    } else {
      console.log('Evento deletar conta cancelado!')
    }
  }

}
