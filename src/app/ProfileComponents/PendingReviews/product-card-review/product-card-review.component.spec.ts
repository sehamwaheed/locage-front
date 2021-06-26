import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardReviewComponent } from './product-card-review.component';

describe('ProductCardReviewComponent', () => {
  let component: ProductCardReviewComponent;
  let fixture: ComponentFixture<ProductCardReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
