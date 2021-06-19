import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocageTodayComponent } from './locage-today.component';

describe('LocageTodayComponent', () => {
  let component: LocageTodayComponent;
  let fixture: ComponentFixture<LocageTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocageTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocageTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
