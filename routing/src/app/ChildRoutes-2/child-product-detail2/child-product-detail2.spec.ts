import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductDetail2 } from './child-product-detail2';

describe('ChildProductDetail2', () => {
  let component: ChildProductDetail2;
  let fixture: ComponentFixture<ChildProductDetail2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProductDetail2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProductDetail2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
