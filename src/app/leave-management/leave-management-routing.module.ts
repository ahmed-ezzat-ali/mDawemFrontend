import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveRequestsComponent } from './pages/leave-requests/leave-requests.component';
import { ManageRequestComponent } from './pages/manage-request/manage-request.component';
import { VacationPlansComponent } from './pages/vacation-plans/vacation-plans.component';

const routes: Routes = [
  {
    path: 'vacation-plans', component: VacationPlansComponent
  },
  {
    path: 'leave-requests', children: [
      { path: '', component: LeaveRequestsComponent },
      { path: ':id', component: ManageRequestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveManagementRoutingModule { }
