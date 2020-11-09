import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTestComponent } from './components/shared-test/shared-test.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SharedTestComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  exports: [SharedTestComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule]
})
export class SharedModule { }
