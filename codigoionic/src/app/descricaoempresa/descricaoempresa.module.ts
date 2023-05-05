import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescricaoempresaPageRoutingModule } from './descricaoempresa-routing.module';

import { DescricaoempresaPage } from './descricaoempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescricaoempresaPageRoutingModule
  ],
  declarations: [DescricaoempresaPage]
})
export class DescricaoempresaPageModule {}
