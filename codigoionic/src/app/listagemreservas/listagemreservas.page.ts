import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';
import { ListagemreservasService } from '../api/listagemreservas.service';

@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage {

  public empresaLogada : any = {}
  // public descricaoreservas: any = {}

  public descricaoreservas = [{
      codReserva      : '',
      dataReserva     : '',
      horario         : '',
      quantidadeLugar : '',
      codEmpresa      : '',
      codUsuario      : '',
    
      usuario: {
        codUsuario: 0,
        cpfUsuario: '',
        emailUsuario: '',
        nomeUsuario: '',
        senhaUsuario: '',
        telefoneUsuario: ''
      },
      empresa: {
        codEmpresa: 0,
        cardapioEmpresa: '',
        cnpjEmpresa: '',
        emailEmpresa: '',
        enderecoEmpresa: '',
        imagemEmpresa: '',
        nomeFantasia: '',
        nomeResponsavel: '',
        porteEmpresa: '',
        ramoEmpresa: '',
        senhaEmpresa: ''
      },
}]

  constructor(private router: Router, private listagemreservasservice: ListagemreservasService, private route: ActivatedRoute, private navCtrl: NavController) {

    this.route.queryParams.subscribe((params) => {
      this.empresaLogada = params['empresaLogada'];
      this.listagemreservasservice.getReservas().then((reservas: any) =>{
        this.descricaoreservas = reservas
      })
    });
  }

  openPerfilEmpresa() {
    this.navCtrl.navigateForward('perfilempresa', {
      queryParams: { empresaLogada: this.empresaLogada },
    });
  }

  confirmarReserva(){
    const confirmar = confirm('Tem certeza de que deseja cancelar a reserva?');
  
    if (confirmar) {
      this.listagemreservasservice.deleteReserva(this.descricaoreservas).then((reservas: any) => {
        this.descricaoreservas = reservas;
        console.log('Reserva cancelada com sucesso!');
        
      });
    } else {
      console.log('Evento deletar reserva cancelado!')
    }
  }

  }


