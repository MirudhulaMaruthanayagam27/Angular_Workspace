import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classbind } from './classbind';

describe('Classbind', () => {
  let component: Classbind;
  let fixture: ComponentFixture<Classbind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Classbind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Classbind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
