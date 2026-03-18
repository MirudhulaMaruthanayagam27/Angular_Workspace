import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlistvalue } from './productlistvalue';

describe('Productlistvalue', () => {
  let component: Productlistvalue;
  let fixture: ComponentFixture<Productlistvalue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlistvalue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productlistvalue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
