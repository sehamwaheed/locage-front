import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterationSidebarComponent } from './filteration-sidebar.component';

describe('FilterationSidebarComponent', () => {
  let component: FilterationSidebarComponent;
  let fixture: ComponentFixture<FilterationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterationSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
