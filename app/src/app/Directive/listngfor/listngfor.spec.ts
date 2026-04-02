import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listngfor } from './listngfor';

describe('Listngfor', () => {
  let component: Listngfor;
  let fixture: ComponentFixture<Listngfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listngfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listngfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
