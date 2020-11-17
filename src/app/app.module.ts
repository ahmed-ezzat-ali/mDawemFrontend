import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientInterceptor } from './services/interceptor/http-client.interceptor';
import { SideMenuComponent } from './layout/components/side-menu/side-menu.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NotificationMenuComponent } from './layout/components/notification-menu/notification-menu.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { AuthorizedLayoutComponent } from './layout/authorized/authorized-layout/authorized-layout.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatIconModule} from '@angular/material/icon';
// import {MatListModule} from '@angular/material/list';
// import {MatButtonModule} from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    NotificationMenuComponent,
    GuestLayoutComponent,
    AuthorizedLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
   
  ],
  exports: [TranslateModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


