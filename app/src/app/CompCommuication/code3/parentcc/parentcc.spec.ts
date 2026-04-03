import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentcc } from './parentcc';

describe('Parentcc', () => {
  let component: Parentcc;
  let fixture: ComponentFixture<Parentcc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentcc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentcc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
