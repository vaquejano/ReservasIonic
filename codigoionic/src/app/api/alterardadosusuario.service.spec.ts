import { TestBed } from '@angular/core/testing';
import { AlterardadosusuarioService } from './alterardadosusuario.service';

describe('AlterardadosusuarioService', () => {
  let service: AlterardadosusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterardadosusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
