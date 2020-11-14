import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterLinkActive } from '@angular/router';


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
    showUserBehaviorSecondaryMenu: false,
  }

  contentMargin = 250;
  helpMenuOpen = 'in';
  showSearch = false;
  searchQuery = '';
  @ViewChild(RouterLinkActive) private routerLinkActive: RouterLinkActive;
  constructor(private translateService: TranslateService) {
    if (sessionStorage.getItem('mdLang')) translateService.setDefaultLang(sessionStorage.getItem('mdLang'))
    else translateService.setDefaultLang('en');
  }
  title = 'mDawem';

  log(state: string) {
    console.log(state);
  }

  search() {
    debugger
    console.log(this.searchQuery);
  }

  clearSearch() {
    if (this.searchQuery == '') {
      this.showSearch = false;

    } else {
      this.searchQuery = '';
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  toggleSideMenu() {
    debugger
    this.openedSidenav = !this.openedSidenav;
    if (this.openedSidenav) {
      this.contentMargin = 250;
    } else {
      this.sideMenuVariables = {
        showTimeManagementSecondaryMenu: false,
        showTaskManagementSecondaryMenu: false,
        showWellnessManagementSecondaryMenu: false,
        showPerformacneManagementSecondaryMenu: false,
        showLeaveManagementSecondaryMenu: false,
        showUserBehaviorSecondaryMenu: false,
      }
      this.contentMargin = 65;
    }
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }

  toggleSecondaryMenu(item: string) {

    debugger

    if (!this.openedSidenav) {
      this.openedSidenav = true;
      this.contentMargin = 250;
      this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    }

    if (item == 'showTimeManagementSecondaryMenu') {

      if (this.sideMenuVariables.showTimeManagementSecondaryMenu) {
        this.sideMenuVariables.showTimeManagementSecondaryMenu = false;
      } else {
        this.sideMenuVariables = {
          showTimeManagementSecondaryMenu: true,
          showTaskManagementSecondaryMenu: false,
          showWellnessManagementSecondaryMenu: false,
          showPerformacneManagementSecondaryMenu: false,
          showLeaveManagementSecondaryMenu: false,
          showUserBehaviorSecondaryMenu: false,
        }
      }

    } else if (item == 'showTaskManagementSecondaryMenu') {

      if (this.sideMenuVariables.showTaskManagementSecondaryMenu) {
        this.sideMenuVariables.showTaskManagementSecondaryMenu = false;
      } else {
        this.sideMenuVariables = {
          showTimeManagementSecondaryMenu: false,
          showTaskManagementSecondaryMenu: true,
          showWellnessManagementSecondaryMenu: false,
          showPerformacneManagementSecondaryMenu: false,
          showLeaveManagementSecondaryMenu: false,
          showUserBehaviorSecondaryMenu: false,
        }
      }

    } else if (item == 'showPerformacneManagementSecondaryMenu') {

      if (this.sideMenuVariables.showPerformacneManagementSecondaryMenu) {
        this.sideMenuVariables.showPerformacneManagementSecondaryMenu = false;
      } else {
        this.sideMenuVariables = {
          showTimeManagementSecondaryMenu: false,
          showTaskManagementSecondaryMenu: false,
          showWellnessManagementSecondaryMenu: false,
          showPerformacneManagementSecondaryMenu: true,
          showLeaveManagementSecondaryMenu: false,
          showUserBehaviorSecondaryMenu: false,
        }
      }

    } else if (item == 'showLeaveManagementSecondaryMenu') {

      if (this.sideMenuVariables.showLeaveManagementSecondaryMenu) {
        this.sideMenuVariables.showLeaveManagementSecondaryMenu = false;
      } else {
        this.sideMenuVariables = {
          showTimeManagementSecondaryMenu: false,
          showTaskManagementSecondaryMenu: false,
          showWellnessManagementSecondaryMenu: false,
          showPerformacneManagementSecondaryMenu: false,
          showLeaveManagementSecondaryMenu: true,
          showUserBehaviorSecondaryMenu: false,
        }
      }

    } else if (item == 'showUserBehaviorSecondaryMenu') {

      if (this.sideMenuVariables.showUserBehaviorSecondaryMenu) {
        this.sideMenuVariables.showUserBehaviorSecondaryMenu = false;
      } else {
        this.sideMenuVariables = {
          showTimeManagementSecondaryMenu: false,
          showTaskManagementSecondaryMenu: false,
          showWellnessManagementSecondaryMenu: false,
          showPerformacneManagementSecondaryMenu: false,
          showLeaveManagementSecondaryMenu: false,
          showUserBehaviorSecondaryMenu: true,
        }
      }

    }



  }

  resetSecodaryMenus() {
    debugger
    this.sideMenuVariables = {
      showTimeManagementSecondaryMenu: false,
      showTaskManagementSecondaryMenu: false,
      showWellnessManagementSecondaryMenu: false,
      showPerformacneManagementSecondaryMenu: false,
      showLeaveManagementSecondaryMenu: false,
      showUserBehaviorSecondaryMenu: false,
    }
  }
}


