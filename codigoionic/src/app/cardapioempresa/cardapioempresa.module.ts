import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardapioempresaPageRoutingModule } from './cardapioempresa-routing.module';

import { CardapioempresaPage } from './cardapioempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioempresaPageRoutingModule
  ],
  declarations: [CardapioempresaPage]
})
export class CardapioempresaPageModule {}
