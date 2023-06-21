import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterardadosPage } from './alterardados.page';

const routes: Routes = [
  {
    path: '',
    component: AlterardadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterardadosPageRoutingModule { }
