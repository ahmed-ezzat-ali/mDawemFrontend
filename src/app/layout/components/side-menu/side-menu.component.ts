import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'md-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
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
export class SideMenuComponent implements OnInit {

  contentMargin = 250;
  helpMenuOpen = 'in';
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

  @Output() sideMenuMessageEvent = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
  }




  toggleSideMenu() {
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

    this.sideMenuMessageEvent.emit({contentMargin: this.contentMargin, helpMenuOpen: this.helpMenuOpen});
  }

  toggleSecondaryMenu(item: string) {


    if (!this.openedSidenav) {
      this.openedSidenav = true;
      this.contentMargin = 250;
      this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
      this.sideMenuMessageEvent.emit({contentMargin: this.contentMargin, helpMenuOpen: this.helpMenuOpen});
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
