import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDefaultAddressComponent } from './not-default-address.component';

describe('NotDefaultAddressComponent', () => {
  let component: NotDefaultAddressComponent;
  let fixture: ComponentFixture<NotDefaultAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDefaultAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotDefaultAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
