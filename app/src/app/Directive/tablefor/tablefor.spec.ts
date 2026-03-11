import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablefor } from './tablefor';

describe('Tablefor', () => {
  let component: Tablefor;
  let fixture: ComponentFixture<Tablefor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablefor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablefor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
