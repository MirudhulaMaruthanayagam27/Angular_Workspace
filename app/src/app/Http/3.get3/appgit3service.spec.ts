import { TestBed } from '@angular/core/testing';

import { Appgit3service } from './appgit3service';

describe('Appgit3service', () => {
  let service: Appgit3service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Appgit3service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
