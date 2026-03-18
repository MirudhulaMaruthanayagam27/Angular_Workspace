import { TestBed } from '@angular/core/testing';

import { Fakeservice } from './fakeservice';

describe('Fakeservice', () => {
  let service: Fakeservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fakeservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
