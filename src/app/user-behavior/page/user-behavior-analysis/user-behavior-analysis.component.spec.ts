import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBehaviorAnalysisComponent } from './user-behavior-analysis.component';

describe('UserBehaviorAnalysisComponent', () => {
  let component: UserBehaviorAnalysisComponent;
  let fixture: ComponentFixture<UserBehaviorAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBehaviorAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBehaviorAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
