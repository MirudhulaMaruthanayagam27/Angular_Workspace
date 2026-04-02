import { TestBed } from '@angular/core/testing';

import { Proservice } from './proservice';

describe('Proservice', () => {
  let service: Proservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Proservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
