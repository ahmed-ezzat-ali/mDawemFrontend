import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/pages/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
 
  {
    path: 'time_management',
    loadChildren: () => import('./time-management/time-management.module').then(m => m.TimeManagementModule)
  },
  {
    path: 'task_management',
    loadChildren: () => import('./task-management/task-management.module').then(m => m.TaskManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
