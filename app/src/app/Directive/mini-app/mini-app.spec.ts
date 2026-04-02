import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniApp } from './mini-app';

describe('MiniApp', () => {
  let component: MiniApp;
  let fixture: ComponentFixture<MiniApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
