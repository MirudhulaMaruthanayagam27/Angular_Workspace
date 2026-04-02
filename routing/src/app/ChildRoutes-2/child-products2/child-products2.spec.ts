import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProducts2 } from './child-products2';

describe('ChildProducts2', () => {
  let component: ChildProducts2;
  let fixture: ComponentFixture<ChildProducts2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildProducts2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProducts2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
