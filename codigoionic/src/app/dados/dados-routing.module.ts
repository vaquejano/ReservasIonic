import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPage } from './dados.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPageRoutingModule {}
