import { TestBed } from '@angular/core/testing';

import { Post1service } from './post1service';

describe('Post1service', () => {
  let service: Post1service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post1service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
