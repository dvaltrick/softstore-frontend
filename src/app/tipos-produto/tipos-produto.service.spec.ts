import { TestBed, inject } from '@angular/core/testing';

import { TiposProdutoService } from './tipos-produto.service';

describe('TiposProdutoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposProdutoService]
    });
  });

  it('should be created', inject([TiposProdutoService], (service: TiposProdutoService) => {
    expect(service).toBeTruthy();
  }));
});
