import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterardadosempresaPageRoutingModule } from './alterardadosempresa-routing.module';

import { AlterardadosempresaPage } from './alterardadosempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterardadosempresaPageRoutingModule
  ],
  declarations: [AlterardadosempresaPage]
})
export class AlterardadosempresaPageModule {}
