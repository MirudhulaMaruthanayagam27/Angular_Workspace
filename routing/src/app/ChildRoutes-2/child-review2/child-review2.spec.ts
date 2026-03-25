import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReview2 } from './child-review2';

describe('ChildReview2', () => {
  let component: ChildReview2;
  let fixture: ComponentFixture<ChildReview2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildReview2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildReview2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
