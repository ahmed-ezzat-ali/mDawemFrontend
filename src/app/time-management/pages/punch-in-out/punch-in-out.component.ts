import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'md-punch-in-out',
  templateUrl: './punch-in-out.component.html',
  styleUrls: ['./punch-in-out.component.scss']
})
export class PunchInOutComponent implements OnInit {
  lang:string;
  constructor(private testService: TestService,
              private translateService: TranslateService
    ) { }

  ngOnInit(): void {
    this.lang = this.translateService.getDefaultLang();
   this.testService.postPosts(JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  })).subscribe((response:any)=>{
   })
  }
  

  changeLang(lang)
  {
    this.lang = lang;
    this.translateService.setDefaultLang(lang);
    sessionStorage.setItem("mdLang",lang);
    window.location.reload();
  }
}
