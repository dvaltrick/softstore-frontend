import { TestBed, inject } from '@angular/core/testing';

import { ImpostosService } from './impostos.service';

describe('ImpostosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImpostosService]
    });
  });

  it('should be created', inject([ImpostosService], (service: ImpostosService) => {
    expect(service).toBeTruthy();
  }));
});
