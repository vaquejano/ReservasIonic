import { TestBed } from '@angular/core/testing';

import { CadastroempresaService } from './cadastroempresa.service';

describe('CadastroempresaService', () => {
  let service: CadastroempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
