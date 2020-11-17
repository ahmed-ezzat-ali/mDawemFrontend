import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'md-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss'],
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
export class AuthorizedLayoutComponent implements OnInit {

  showSearch = false;
  searchQuery = '';
  helpMenuOpen = 'in';
  openedSidenav = true;
  contentMargin = 250;
  @ViewChild(SideMenuComponent) sideMenuComponent;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideMenu() {
    this.sideMenuComponent.toggleSideMenu();

  }

  receiveSideMenuMessage(event) {
    this.contentMargin = event.contentMargin;
    this.helpMenuOpen = event.helpMenuOpen;

  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  search() {
    console.log(this.searchQuery);
  }

  clearSearch() {
    if (this.searchQuery == '') {
      this.showSearch = false;

    } else {
      this.searchQuery = '';
    }
  }

  logout(){
    debugger
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/')
  }

}
