import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconC } from './icon-c';

describe('IconC', () => {
  let component: IconC;
  let fixture: ComponentFixture<IconC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconC);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
