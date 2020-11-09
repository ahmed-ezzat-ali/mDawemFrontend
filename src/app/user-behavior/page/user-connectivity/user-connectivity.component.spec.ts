import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConnectivityComponent } from './user-connectivity.component';

describe('UserConnectivityComponent', () => {
  let component: UserConnectivityComponent;
  let fixture: ComponentFixture<UserConnectivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConnectivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConnectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
