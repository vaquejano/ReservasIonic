import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemempresasPage } from './listagemempresas.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemempresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemempresasPageRoutingModule {}
