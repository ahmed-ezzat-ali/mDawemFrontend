import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'time-management',
    loadChildren: () => import('./time-management/time-management.module').then(m => m.TimeManagementModule)
  },
  {
    path: 'task-management',
    loadChildren: () => import('./task-management/task-management.module').then(m => m.TaskManagementModule)
  },
  {
    path: 'wellness-management',
    loadChildren: () => import('./wellness-management/wellness-management.module').then(m => m.WellnessManagementModule)
  },
  {
    path: 'performance-management',
    loadChildren: () => import('./performance-management/performance-management.module').then(m => m.PerformanceManagementModule)
  },
  {
    path: 'leave-management',
    loadChildren: () => import('./leave-management/leave-management.module').then(m => m.LeaveManagementModule)
  },
  {
    path: 'user-behavior',
    loadChildren: () => import('./user-behavior/user-behavior.module').then(m => m.UserBehaviorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
