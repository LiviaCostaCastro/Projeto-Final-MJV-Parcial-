import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinitialComponent } from './productsinitial.component';

describe('ProductsinitialComponent', () => {
  let component: ProductsinitialComponent;
  let fixture: ComponentFixture<ProductsinitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsinitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
