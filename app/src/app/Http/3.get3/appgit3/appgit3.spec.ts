import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appgit3 } from './appgit3';

describe('Appgit3', () => {
  let component: Appgit3;
  let fixture: ComponentFixture<Appgit3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appgit3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appgit3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
