import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrousuarioPage } from './cadastrousuario.page';

describe('CadastrousuarioPage', () => {
  let component: CadastrousuarioPage;
  let fixture: ComponentFixture<CadastrousuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrousuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
