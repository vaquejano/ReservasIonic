import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroempresaPage } from './cadastroempresa.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroempresaPageRoutingModule {}
