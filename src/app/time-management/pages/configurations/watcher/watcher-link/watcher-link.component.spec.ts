import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherLinkComponent } from './watcher-link.component';

describe('WatcherLinkComponent', () => {
  let component: WatcherLinkComponent;
  let fixture: ComponentFixture<WatcherLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatcherLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
