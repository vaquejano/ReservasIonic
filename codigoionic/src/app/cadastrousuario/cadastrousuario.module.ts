import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrousuarioPageRoutingModule } from './cadastrousuario-routing.module';

import { CadastrousuarioPage } from './cadastrousuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrousuarioPageRoutingModule
  ],
  declarations: [CadastrousuarioPage]
})
export class CadastrousuarioPageModule {}
