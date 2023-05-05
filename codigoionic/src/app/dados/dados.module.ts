import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPageRoutingModule } from './dados-routing.module';

import { DadosPage } from './dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPageRoutingModule
  ],
  declarations: [DadosPage]
})
export class DadosPageModule {}
