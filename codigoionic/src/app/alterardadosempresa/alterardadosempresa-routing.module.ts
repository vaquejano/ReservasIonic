import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterardadosempresaPage } from './alterardadosempresa.page';

const routes: Routes = [
  {
    path: '',
    component: AlterardadosempresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterardadosempresaPageRoutingModule { }
