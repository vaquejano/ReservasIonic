import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemempresasPageRoutingModule } from './listagemempresas-routing.module';

import { ListagemempresasPage } from './listagemempresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemempresasPageRoutingModule
  ],
  declarations: [ListagemempresasPage]
})
export class ListagemempresasPageModule {}
