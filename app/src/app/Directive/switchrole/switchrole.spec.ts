import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchrole } from './switchrole';

describe('Switchrole', () => {
  let component: Switchrole;
  let fixture: ComponentFixture<Switchrole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchrole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchrole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
