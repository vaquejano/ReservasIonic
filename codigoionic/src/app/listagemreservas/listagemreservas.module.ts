import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListagemreservasPageRoutingModule } from './listagemreservas-routing.module';
import { ListagemreservasPage } from './listagemreservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemreservasPageRoutingModule
  ],
  declarations: [ListagemreservasPage]
})
export class ListagemreservasPageModule {}
