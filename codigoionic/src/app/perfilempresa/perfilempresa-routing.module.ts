import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilempresaPage } from './perfilempresa.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilempresaPageRoutingModule {}
