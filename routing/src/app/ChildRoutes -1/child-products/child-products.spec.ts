import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProducts } from './child-products';

describe('ChildProducts', () => {
  let component: ChildProducts;
  let fixture: ComponentFixture<ChildProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
