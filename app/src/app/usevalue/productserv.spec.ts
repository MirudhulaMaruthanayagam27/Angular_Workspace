import { TestBed } from '@angular/core/testing';

import { ProductServ } from './productserv';

describe('Productserv', () => {
  let service: ProductServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
