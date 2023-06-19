import { TestBed } from '@angular/core/testing';
import { DadosUsuarioService } from './dadosusuario.service';

describe('DadosUsuarioService', () => {
  let service: DadosUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
