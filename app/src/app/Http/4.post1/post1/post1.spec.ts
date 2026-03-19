import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post1 } from './post1';

describe('Post1', () => {
  let component: Post1;
  let fixture: ComponentFixture<Post1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
