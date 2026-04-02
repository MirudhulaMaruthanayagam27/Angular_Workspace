import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libapp } from './libapp';

describe('Libapp', () => {
  let component: Libapp;
  let fixture: ComponentFixture<Libapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Libapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Libapp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
