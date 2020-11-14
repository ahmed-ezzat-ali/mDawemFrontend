import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SideMenuComponent } from './layout/components/side-menu/side-menu.component';
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


  helpMenuOpen = 'in';
  openedSidenav = true;
  contentMargin = 250;
  showSearch = false;
  searchQuery = '';
  hero = true;

  @ViewChild(SideMenuComponent) sideMenuComponent;

  constructor(private translateService: TranslateService) {
    if (sessionStorage.getItem('mdLang')) translateService.setDefaultLang(sessionStorage.getItem('mdLang'))
    else translateService.setDefaultLang('en');
  }
  title = 'mDawem';


  toggleSideMenu(){
    debugger
    this.sideMenuComponent.toggleSideMenu();

  }

  receiveSideMenuMessage(event){
    debugger
    this.contentMargin = event.contentMargin;
    this.helpMenuOpen = event.helpMenuOpen;

  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
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


}


