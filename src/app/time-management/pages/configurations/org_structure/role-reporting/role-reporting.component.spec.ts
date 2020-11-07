import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleReportingComponent } from './role-reporting.component';

describe('RoleReportingComponent', () => {
  let component: RoleReportingComponent;
  let fixture: ComponentFixture<RoleReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleReportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
