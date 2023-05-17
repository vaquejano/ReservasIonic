import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterardadosempresaPage } from './alterardadosempresa.page';

describe('AlterardadosempresaPage', () => {
  let component: AlterardadosempresaPage;
  let fixture: ComponentFixture<AlterardadosempresaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterardadosempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
