import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1pcart } from './h1pcart';

describe('H1pcart', () => {
  let component: H1pcart;
  let fixture: ComponentFixture<H1pcart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H1pcart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H1pcart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
