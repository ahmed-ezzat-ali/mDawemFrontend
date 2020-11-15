import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {



  constructor(private translateService: TranslateService) {
    if (sessionStorage.getItem('mdLang')) translateService.setDefaultLang(sessionStorage.getItem('mdLang'))
    else translateService.setDefaultLang('en');
  }
  title = 'mDawem';







}


