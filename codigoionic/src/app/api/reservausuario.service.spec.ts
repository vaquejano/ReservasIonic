import { TestBed } from '@angular/core/testing';

import { ReservausuarioService } from './reservausuario.service';

describe('ReservausuarioService', () => {
  let service: ReservausuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservausuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
