import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Async1 } from './async1';

describe('Async1', () => {
  let component: Async1;
  let fixture: ComponentFixture<Async1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Async1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Async1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
