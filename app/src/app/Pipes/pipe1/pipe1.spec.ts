import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe1 } from './pipe1';

describe('Pipe1', () => {
  let component: Pipe1;
  let fixture: ComponentFixture<Pipe1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipe1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipe1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
