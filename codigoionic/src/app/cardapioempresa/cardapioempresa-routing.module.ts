import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardapioempresaPage } from './cardapioempresa.page';

const routes: Routes = [
  {
    path: '',
    component: CardapioempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioempresaPageRoutingModule {}
