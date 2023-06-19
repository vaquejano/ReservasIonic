import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardapioempresaPage } from './cardapioempresa.page';

describe('CardapioempresaPage', () => {
  let component: CardapioempresaPage;
  let fixture: ComponentFixture<CardapioempresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardapioempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
