import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appgit } from './appgit';

describe('Appgit', () => {
  let component: Appgit;
  let fixture: ComponentFixture<Appgit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appgit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appgit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
