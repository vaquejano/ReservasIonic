import { TestBed } from '@angular/core/testing';

import { LoginempresaService } from './loginempresa.service';

describe('LoginempresaService', () => {
  let service: LoginempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
