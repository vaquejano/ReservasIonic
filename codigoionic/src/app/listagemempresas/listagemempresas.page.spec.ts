import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemempresasPage } from './listagemempresas.page';

describe('ListagemempresasPage', () => {
  let component: ListagemempresasPage;
  let fixture: ComponentFixture<ListagemempresasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemempresasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
