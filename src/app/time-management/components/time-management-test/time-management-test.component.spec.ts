import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManagementTestComponent } from './time-management-test.component';

describe('TimeManagementTestComponent', () => {
  let component: TimeManagementTestComponent;
  let fixture: ComponentFixture<TimeManagementTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeManagementTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeManagementTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
