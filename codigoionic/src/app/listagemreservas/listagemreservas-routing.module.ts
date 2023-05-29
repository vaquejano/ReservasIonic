import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemreservasPage } from './listagemreservas.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemreservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemreservasPageRoutingModule {}
