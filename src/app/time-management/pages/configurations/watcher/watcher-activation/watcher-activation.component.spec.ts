import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherActivationComponent } from './watcher-activation.component';

describe('WatcherActivationComponent', () => {
  let component: WatcherActivationComponent;
  let fixture: ComponentFixture<WatcherActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatcherActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
