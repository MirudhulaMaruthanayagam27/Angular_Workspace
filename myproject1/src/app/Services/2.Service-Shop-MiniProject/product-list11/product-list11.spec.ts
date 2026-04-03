import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList11 } from './product-list11';

describe('ProductList11', () => {
  let component: ProductList11;
  let fixture: ComponentFixture<ProductList11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductList11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
