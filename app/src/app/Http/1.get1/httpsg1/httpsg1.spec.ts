import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpsg1 } from './httpsg1';

describe('Httpsg1', () => {
  let component: Httpsg1;
  let fixture: ComponentFixture<Httpsg1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpsg1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpsg1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
