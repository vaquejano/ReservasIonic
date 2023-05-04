import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {


  public usuario = {
    cod_usuario : 0,
    cpf_usuario : 0,
    email_usuario : '',
    nome_usuario : '',
    senha_usuario : ''
  }

  constructor(private service: DadosService) { }

  public save(){
    let newObj = {
      userId  : 10, 
      id      : 101, 
      title   : 'Novo objeto', 
      body    : 'Descrição do novo objeto'
    }

    this.service.postDados(newObj).then(dados => {
      console.log('SALVO');
      console.log(dados);

    })

  }

  ngOnInit(): void {
  }

}
