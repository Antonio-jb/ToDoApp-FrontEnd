import { TestBed } from '@angular/core/testing';

import { EstadoFiltroService } from './estado-filtro.service';

describe('EstadoFiltroService', () => {
  let service: EstadoFiltroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoFiltroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
