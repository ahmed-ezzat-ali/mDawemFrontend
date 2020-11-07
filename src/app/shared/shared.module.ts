import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTestComponent } from './components/shared-test/shared-test.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SharedTestComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ],
  exports: [SharedTestComponent]
})
export class SharedModule { }
