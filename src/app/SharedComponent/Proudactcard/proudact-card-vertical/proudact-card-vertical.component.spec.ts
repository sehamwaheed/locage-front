import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudactCardVerticalComponent } from './proudact-card-vertical.component';

describe('ProudactCardVerticalComponent', () => {
  let component: ProudactCardVerticalComponent;
  let fixture: ComponentFixture<ProudactCardVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudactCardVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudactCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
