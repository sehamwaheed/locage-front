import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocageComponent } from './locage.component';

describe('LocageComponent', () => {
  let component: LocageComponent;
  let fixture: ComponentFixture<LocageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
