import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdata } from './productdata';

describe('Productdata', () => {
  let component: Productdata;
  let fixture: ComponentFixture<Productdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productdata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
