import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
})
export class EmpresaPage implements OnInit {


  public empresa = {
    cod_empresa : 0,
    cnpj_empresa : 0,
    senha_empresa : ''
  }

  constructor() { }

  ngOnInit() {
  }

}