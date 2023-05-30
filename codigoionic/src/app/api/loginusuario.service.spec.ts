import { TestBed } from '@angular/core/testing';

import { LoginusuarioService } from './loginusuario.service';

describe('LoginusuarioService', () => {
  let service: LoginusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
