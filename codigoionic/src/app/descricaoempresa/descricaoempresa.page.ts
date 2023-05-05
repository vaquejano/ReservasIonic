import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descricaoempresa',
  templateUrl: './descricaoempresa.page.html',
  styleUrls: ['./descricaoempresa.page.scss'],
})
export class DescricaoempresaPage {

  public pathImgs = '../../assets/img/';

  public descricaoempresa = {
    codigo: 0,
    categoria: 0,
    nome: '',
    descricao: '',
    imagem: [],
    visibled: false
  }

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params=>{
      this.descricaoempresa = params['descricaoempresa']
    });
  }

  
}
