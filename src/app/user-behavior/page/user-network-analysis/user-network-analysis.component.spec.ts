import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNetworkAnalysisComponent } from './user-network-analysis.component';

describe('UserNetworkAnalysisComponent', () => {
  let component: UserNetworkAnalysisComponent;
  let fixture: ComponentFixture<UserNetworkAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNetworkAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNetworkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
