import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilempresaPage } from './perfilempresa.page';

describe('PerfilempresaPage', () => {
  let component: PerfilempresaPage;
  let fixture: ComponentFixture<PerfilempresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
