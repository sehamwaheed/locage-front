import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookDetailsComponent } from './address-book-details.component';

describe('AddressBookDetailsComponent', () => {
  let component: AddressBookDetailsComponent;
  let fixture: ComponentFixture<AddressBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
