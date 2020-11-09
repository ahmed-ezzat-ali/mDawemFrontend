import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.1s ease-out',
              style({ height: 100, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 100, opacity: 1 }),
            animate('0.1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'sidemenuAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 250 }),
            animate('0.1s ease-out',
              style({ width: 65 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: 65 }),
            animate('0.1s ease-in',
              style({ width: 250 }))
          ]
        )
      ]
    ),
    trigger('slideInOut', [
      state('in', style({
        width: '250px'
      })),
      state('out', style({
        width: '65px'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out'))
    ])
  ]
})
export class AppComponent {

  openedSidenav = true;
  showSecondaryMenu = false;
  sideMenuVariables = {
    showTimeManagementSecondaryMenu: false,
    showTaskManagementSecondaryMenu: false,
    showWellnessManagementSecondaryMenu: false,
    showPerformacneManagementSecondaryMenu: false,
    showLeaveManagementSecondaryMenu: false,
  }

  contentMargin = 250;
  helpMenuOpen = 'in';
  constructor(private translateService: TranslateService) {
    if (sessionStorage.getItem('mdLang')) translateService.setDefaultLang(sessionStorage.getItem('mdLang'))
    else translateService.setDefaultLang('en');
  }
  title = 'mDawem';

  log(state: string) {
    console.log(state);
  }

  onSideMenuToggle() {
    debugger
    this.openedSidenav = !this.openedSidenav;
    if (this.openedSidenav) {
      this.contentMargin = 250;
    } else {
      this.contentMargin = 65;
    }
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';

  }
}


