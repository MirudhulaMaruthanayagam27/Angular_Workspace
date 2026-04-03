import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReviews } from './child-reviews';

describe('ChildReviews', () => {
  let component: ChildReviews;
  let fixture: ComponentFixture<ChildReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
