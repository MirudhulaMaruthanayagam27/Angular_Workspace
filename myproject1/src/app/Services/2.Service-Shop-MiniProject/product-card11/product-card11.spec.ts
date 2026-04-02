import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard11 } from './product-card11';

describe('ProductCard11', () => {
  let component: ProductCard11;
  let fixture: ComponentFixture<ProductCard11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCard11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
