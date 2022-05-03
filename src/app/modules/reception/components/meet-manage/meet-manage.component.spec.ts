import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetManageComponent } from './meet-manage.component';

describe('MeetManageComponent', () => {
  let component: MeetManageComponent;
  let fixture: ComponentFixture<MeetManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
