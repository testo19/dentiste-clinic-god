import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHealComponent } from './customer-heal.component';

describe('CustomerHealComponent', () => {
  let component: CustomerHealComponent;
  let fixture: ComponentFixture<CustomerHealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
