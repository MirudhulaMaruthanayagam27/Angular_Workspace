import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1plist } from './h1plist';

describe('H1plist', () => {
  let component: H1plist;
  let fixture: ComponentFixture<H1plist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [H1plist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H1plist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
