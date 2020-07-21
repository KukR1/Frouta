import { TestBed } from '@angular/core/testing';

import { fruitsServiceService } from './fruits.service';

describe('fruitsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: fruitsServiceService = TestBed.get(fruitsServiceService);
    expect(service).toBeTruthy();
  });
});
