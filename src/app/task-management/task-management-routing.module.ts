import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [

  {
    path: 'tasks', children: [
      { path: '', component: TaskListComponent },
      { path: 'new', component: TaskCreateComponent },
      { path: ':id', component: TaskDetailsComponent },
    ]
  },

  {
    path: 'projects', children: [
      { path: '', component: ProjectListComponent },
      { path: 'new', component: ProjectCreateComponent },
      { path: ':id', component: ProjectDetailsComponent },
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
