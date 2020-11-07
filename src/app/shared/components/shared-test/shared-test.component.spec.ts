import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTestComponent } from './shared-test.component';

describe('SharedTestComponent', () => {
  let component: SharedTestComponent;
  let fixture: ComponentFixture<SharedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
