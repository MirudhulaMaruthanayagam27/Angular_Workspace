import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginif } from './loginif';

describe('Loginif', () => {
  let component: Loginif;
  let fixture: ComponentFixture<Loginif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
