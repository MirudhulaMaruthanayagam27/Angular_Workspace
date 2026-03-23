import { TestBed } from '@angular/core/testing';

import { Githubservice } from './githubservice';

describe('Githubservice', () => {
  let service: Githubservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Githubservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
