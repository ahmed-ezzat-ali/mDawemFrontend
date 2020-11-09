import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackScreenshotsComponent } from './track-screenshots.component';

describe('TrackScreenshotsComponent', () => {
  let component: TrackScreenshotsComponent;
  let fixture: ComponentFixture<TrackScreenshotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackScreenshotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
