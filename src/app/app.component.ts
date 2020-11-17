import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {



  constructor(private translateService: TranslateService, private cookieService: CookieService, private router: Router) {
    if (sessionStorage.getItem('mdLang')) {
      translateService.setDefaultLang(sessionStorage.getItem('mdLang'));
    }
    else {
      translateService.setDefaultLang('en');
    }

    let accessToken = cookieService.get('accessToken');
    let userId = cookieService.get('userId');
    debugger

    if (userId) {
      this.router.navigateByUrl('/time-management');
    }



  }
  title = 'mDawem';







}


