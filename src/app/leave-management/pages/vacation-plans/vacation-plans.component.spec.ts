import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationPlansComponent } from './vacation-plans.component';

describe('VacationPlansComponent', () => {
  let component: VacationPlansComponent;
  let fixture: ComponentFixture<VacationPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
