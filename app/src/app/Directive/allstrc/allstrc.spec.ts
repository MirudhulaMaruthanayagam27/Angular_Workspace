import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allstrc } from './allstrc';

describe('Allstrc', () => {
  let component: Allstrc;
  let fixture: ComponentFixture<Allstrc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allstrc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allstrc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
