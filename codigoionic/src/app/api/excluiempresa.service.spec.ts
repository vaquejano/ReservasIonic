import { TestBed } from '@angular/core/testing';

import { ExcluiempresaService } from './excluiempresa.service';

describe('ExcluiempresaService', () => {
  let service: ExcluiempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcluiempresaService);
  });

  it('must be deleted', () => {
    expect(service).toBeTruthy();
  });
});
