import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userscompenent } from './userscompenent';

describe('Userscompenent', () => {
  let component: Userscompenent;
  let fixture: ComponentFixture<Userscompenent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userscompenent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userscompenent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
