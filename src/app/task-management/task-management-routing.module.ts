import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCreateComponent } from './pages/task-create/task-create.component';

const routes: Routes = [
  {path:'',component:TaskCreateComponent},
  {path:'task-create',component:TaskCreateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagementRoutingModule { }
