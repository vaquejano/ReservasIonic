import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterardadosPage } from './alterardados.page';

describe('AlterardadosPage', () => {
  let component: AlterardadosPage;
  let fixture: ComponentFixture<AlterardadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlterardadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
