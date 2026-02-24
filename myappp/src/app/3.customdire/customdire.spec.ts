import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customdire } from './customdire';

describe('Customdire', () => {
  let component: Customdire;
  let fixture: ComponentFixture<Customdire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customdire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customdire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
