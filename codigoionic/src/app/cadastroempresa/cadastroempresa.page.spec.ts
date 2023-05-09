import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroempresaPage } from './cadastroempresa.page';

describe('CadastroempresaPage', () => {
  let component: CadastroempresaPage;
  let fixture: ComponentFixture<CadastroempresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
