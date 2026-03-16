import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngoninit } from './ngoninit';

describe('Ngoninit', () => {
  let component: Ngoninit;
  let fixture: ComponentFixture<Ngoninit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngoninit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngoninit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
