import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appgit2 } from './appgit2';

describe('Appgit2', () => {
  let component: Appgit2;
  let fixture: ComponentFixture<Appgit2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appgit2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appgit2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
