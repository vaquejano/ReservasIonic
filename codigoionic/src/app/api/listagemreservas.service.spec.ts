import { TestBed } from '@angular/core/testing';

import { ListagemreservasService } from './listagemreservas.service';

describe('ListagemreservasService', () => {
  let service: ListagemreservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemreservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
