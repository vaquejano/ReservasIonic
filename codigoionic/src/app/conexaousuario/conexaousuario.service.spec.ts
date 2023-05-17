import { TestBed } from '@angular/core/testing';

import { ConexaousuarioService } from './conexaousuario.service';

describe('ConexaousuarioService', () => {
  let service: ConexaousuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexaousuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
