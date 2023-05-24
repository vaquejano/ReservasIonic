import { TestBed } from '@angular/core/testing';

import { CadastrousuarioService } from './cadastrousuario.service';

describe('CadastrousuarioService', () => {
  let service: CadastrousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
