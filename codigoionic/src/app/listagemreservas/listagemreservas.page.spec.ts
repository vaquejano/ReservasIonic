import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemreservasPage } from './listagemreservas.page';
import { IonicModule } from '@ionic/angular';

describe('ListagemreservasPage', () => {
  let component: ListagemreservasPage;
  let fixture: ComponentFixture<ListagemreservasPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ListagemreservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
