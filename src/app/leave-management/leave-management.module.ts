import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveRequestsComponent } from './pages/leave-requests/leave-requests.component';
import { ManageRequestComponent } from './pages/manage-request/manage-request.component';
import { VacationPlansComponent } from './pages/vacation-plans/vacation-plans.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LeaveRequestsComponent, ManageRequestComponent, VacationPlansComponent],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    SharedModule
  ]
})
export class LeaveManagementModule { }
