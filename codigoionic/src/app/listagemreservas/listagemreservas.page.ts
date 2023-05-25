import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage implements OnInit {

  nome_fantasia: string;
  dados: any;
  
  

  constructor(private dadosservice: DadosService) {

    this.nome_fantasia = 'nome_fantasia';
    this.dados = dadosservice;

  }

  ngOnInit() {

    this.dados.getAllDados('empresas').then((empresa: { nome_fantasia: string;}) => {
      this.nome_fantasia = empresa.nome_fantasia;
    });
  }
  

}