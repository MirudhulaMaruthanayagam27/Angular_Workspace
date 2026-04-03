import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcc } from './childcc';

describe('Childcc', () => {
  let component: Childcc;
  let fixture: ComponentFixture<Childcc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childcc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childcc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
