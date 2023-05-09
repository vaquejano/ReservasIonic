import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrousuarioPage } from './cadastrousuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrousuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrousuarioPageRoutingModule {}
