import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind } from './bind';

describe('Bind', () => {
  let component: Bind;
  let fixture: ComponentFixture<Bind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
