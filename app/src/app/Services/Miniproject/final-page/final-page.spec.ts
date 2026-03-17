import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPage } from './final-page';

describe('FinalPage', () => {
  let component: FinalPage;
  let fixture: ComponentFixture<FinalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
