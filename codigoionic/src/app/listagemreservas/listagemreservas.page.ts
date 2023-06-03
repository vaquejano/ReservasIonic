import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { EmpresaPage } from '../empresa/empresa.page';



@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage  {

  empresa: any
  nome_fantasia: any
  dados: any

  @ViewChild('empresaTest') empresaLogada:  EmpresaPage | undefined

  constructor(private router: Router, private dadosservice: DadosService, private route: ActivatedRoute) {

    this.route.queryParams.subscribe((params) => {
      this.dados = params['codEmpresa'];
    });

    
    
  }

  // ngOnInit() {
  //   this.dados.getAllDados('empresas').then((empresa: { nome_fantasia: string; }) => {
  //     this.nome_fantasia = empresa.nome_fantasia;
  //   });
  // }

  openPerfilEmpresa() {
    console.log(this.dados)
    this.empresa.getId(this.dados).subscribe(() => {
      
      this.router.navigate(['/perfilempresa']);
    });
  }

  public pathImgs = '../../assets/img/';

}
