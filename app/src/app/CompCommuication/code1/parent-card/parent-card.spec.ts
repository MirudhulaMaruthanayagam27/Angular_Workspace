import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCard } from './parent-card';

describe('ParentCard', () => {
  let component: ParentCard;
  let fixture: ComponentFixture<ParentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
