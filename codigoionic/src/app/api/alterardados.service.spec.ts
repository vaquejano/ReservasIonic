import { TestBed } from '@angular/core/testing';

import { AlterardadosService } from './alterardados.service';

describe('AlterardadosService', () => {
  let service: AlterardadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterardadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
