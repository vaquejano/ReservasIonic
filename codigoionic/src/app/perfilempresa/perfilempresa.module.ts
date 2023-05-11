import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilempresaPageRoutingModule } from './perfilempresa-routing.module';

import { PerfilempresaPage } from './perfilempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilempresaPageRoutingModule
  ],
  declarations: [PerfilempresaPage]
})
export class PerfilempresaPageModule {}
