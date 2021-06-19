import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryInCtegoryComponent } from './sub-category-in-ctegory.component';

describe('SubCategoryInCtegoryComponent', () => {
  let component: SubCategoryInCtegoryComponent;
  let fixture: ComponentFixture<SubCategoryInCtegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryInCtegoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryInCtegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
