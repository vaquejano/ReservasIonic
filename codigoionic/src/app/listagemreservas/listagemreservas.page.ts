import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage implements OnInit {

  public dados = {
    codigo: 0,
    nome : '',
    imagem: []

  }

  
  

  constructor() {}

  ngOnInit() {
  }
  
}
