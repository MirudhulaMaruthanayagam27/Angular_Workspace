import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unsaved } from './unsaved';

describe('Unsaved', () => {
  let component: Unsaved;
  let fixture: ComponentFixture<Unsaved>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Unsaved]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Unsaved);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
