import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescricaoempresaPage } from './descricaoempresa.page';
import { IonicModule } from '@ionic/angular';

describe('DescricaoempresaPage', () => {
  let component: DescricaoempresaPage;
  let fixture: ComponentFixture<DescricaoempresaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DescricaoempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
