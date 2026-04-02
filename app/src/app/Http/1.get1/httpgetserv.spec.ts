import { TestBed } from '@angular/core/testing';

import { Httpgetserv } from './httpgetserv';

describe('Httpgetserv', () => {
  let service: Httpgetserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Httpgetserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
