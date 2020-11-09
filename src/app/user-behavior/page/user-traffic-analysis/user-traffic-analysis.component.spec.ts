import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrafficAnalysisComponent } from './user-traffic-analysis.component';

describe('UserTrafficAnalysisComponent', () => {
  let component: UserTrafficAnalysisComponent;
  let fixture: ComponentFixture<UserTrafficAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTrafficAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrafficAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
