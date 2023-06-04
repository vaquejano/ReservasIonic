import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../api/dados.service';
// import { EmpresaPage } from '../empresa/empresa.page';
import { NavController } from '@ionic/angular';
// import { LoginempresaService } from '../api/loginempresa.service';


@Component({
  selector: 'app-listagemreservas',
  templateUrl: './listagemreservas.page.html',
  styleUrls: ['./listagemreservas.page.scss'],
})
export class ListagemreservasPage {

  empresa: any
  nome_fantasia: any
  dados: any
  codEmpresa: any

  // @ViewChild('empresaTest') empresaLogada:  EmpresaPage | undefined

  constructor(private router: Router, private dadosservice: DadosService, private route: ActivatedRoute, private navCtrl: NavController) {

    // this.route.queryParams.subscribe((params) => {
    //   this.dados = params['codEmpresa'];
    // });



  }

  // enviarDados(codEmpresa: any) {
  //   this.navCtrl.navigateForward('perfilemprsa', {
  //     queryParams: { codEmpresa: codEmpresa },
  //   });
  // }


  // ngOnInit() {
  //   this.dados.getAllDados('empresas').then((empresa: { nome_fantasia: string; }) => {
  //     this.nome_fantasia = empresa.nome_fantasia;
  //   });
  // }

  openPerfilEmpresa() { 
    this.codEmpresa.getDadoById().then((empresa: any) => {
       const codEmpresa = empresa.codEmpresa; 
       this.router.navigate(['/perfilempresa'], { queryParams: { codEmpresa: codEmpresa } }); }); }


  // openPerfilEmpresa() {
  //   console.log(this.dados)
  //   this.empresa.getId(this.dados).subscribe(() => {

  //     this.router.navigate(['/perfilempresa']);
  //   });
  // }

  public pathImgs = '../../assets/img/';

}
