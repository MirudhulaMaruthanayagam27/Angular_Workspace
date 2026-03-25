import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductDetail } from './child-product-detail';

describe('ChildProductDetail', () => {
  let component: ChildProductDetail;
  let fixture: ComponentFixture<ChildProductDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProductDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProductDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
