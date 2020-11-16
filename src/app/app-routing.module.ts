import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedLayoutComponent } from './layout/authorized/authorized-layout/authorized-layout.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';

const routes: Routes = [

  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
    ]
  },

  {
    path: 'account',
    // loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  {
    path: '',
    component: AuthorizedLayoutComponent,
    children: [
      // { path: 'dashboard', loadChildren: () => import('./time-management/time-management.module').then(m => m.TimeManagementModule)},

      

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
    ]
  },

  // {
  //   path: '',
  //   loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
