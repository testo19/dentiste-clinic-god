import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHistoriesComponent } from './customer-histories.component';

describe('CustomerHistoriesComponent', () => {
  let component: CustomerHistoriesComponent;
  let fixture: ComponentFixture<CustomerHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHistoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
