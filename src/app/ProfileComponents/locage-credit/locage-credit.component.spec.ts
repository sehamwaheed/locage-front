import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocageCreditComponent } from './locage-credit.component';

describe('LocageCreditComponent', () => {
  let component: LocageCreditComponent;
  let fixture: ComponentFixture<LocageCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocageCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocageCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
