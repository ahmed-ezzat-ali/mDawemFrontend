import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentViewComponent } from './absent-view.component';

describe('AbsentViewComponent', () => {
  let component: AbsentViewComponent;
  let fixture: ComponentFixture<AbsentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
