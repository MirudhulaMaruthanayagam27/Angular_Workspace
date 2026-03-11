import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Msgif } from './msgif';

describe('Msgif', () => {
  let component: Msgif;
  let fixture: ComponentFixture<Msgif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Msgif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Msgif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
