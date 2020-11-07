import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [TaskCreateComponent],
  imports: [
    CommonModule,
    TaskManagementRoutingModule,
    TranslateModule.forChild(),
  ]
})
export class TaskManagementModule { }
