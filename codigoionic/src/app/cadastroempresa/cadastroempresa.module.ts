import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroempresaPageRoutingModule } from './cadastroempresa-routing.module';

import { CadastroempresaPage } from './cadastroempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroempresaPageRoutingModule
  ],
  declarations: [CadastroempresaPage]
})
export class CadastroempresaPageModule {}
