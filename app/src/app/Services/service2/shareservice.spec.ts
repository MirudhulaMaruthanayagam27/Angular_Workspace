import { TestBed } from '@angular/core/testing';

import { Shareservice } from './shareservice';

describe('Shareservice', () => {
  let service: Shareservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shareservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
