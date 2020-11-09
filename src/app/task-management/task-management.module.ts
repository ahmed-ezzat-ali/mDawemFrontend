import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TranslateModule } from '@ngx-translate/core';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TaskCreateComponent, TaskDetailsComponent, ProjectDetailsComponent, ProjectCreateComponent, ProjectListComponent, TaskListComponent],
  imports: [
    CommonModule,
    TaskManagementRoutingModule,
    TranslateModule.forChild(),
    MatButtonModule,
    SharedModule
  ],
  exports:[
    SharedModule
  ]
})
export class TaskManagementModule { }
