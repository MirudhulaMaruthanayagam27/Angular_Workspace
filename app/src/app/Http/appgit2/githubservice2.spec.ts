import { TestBed } from '@angular/core/testing';

import { Githubservice2 } from './githubservice2';

describe('Githubservice2', () => {
  let service: Githubservice2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Githubservice2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
