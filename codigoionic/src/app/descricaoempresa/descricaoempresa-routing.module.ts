import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescricaoempresaPage } from './descricaoempresa.page';

const routes: Routes = [
  {
    path: '',
    component: DescricaoempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescricaoempresaPageRoutingModule {}
