import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIcon11 } from './product-icon11';

describe('ProductIcon11', () => {
  let component: ProductIcon11;
  let fixture: ComponentFixture<ProductIcon11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductIcon11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductIcon11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
