import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeManagementRoutingModule } from './time-management-routing.module';
import { PunchInOutComponent } from './pages/punch-in-out/punch-in-out.component';
import { TimeSheetViewComponent } from './pages/time-sheet-view/time-sheet-view.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { TimeSheetApproveComponent } from './pages/time-sheet-approve/time-sheet-approve.component';
import { AbsentViewComponent } from './pages/absent-view/absent-view.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { WorkingDaysComponent } from './pages/configurations/config/working-days/working-days.component';
import { WorkingTimeComponent } from './pages/configurations/config/working-time/working-time.component';
import { WatcherLinkComponent } from './pages/configurations/watcher/watcher-link/watcher-link.component';
import { WatcherActivationComponent } from './pages/configurations/watcher/watcher-activation/watcher-activation.component';
import { RoleReportingComponent } from './pages/configurations/org_structure/role-reporting/role-reporting.component';
import { ApproveAttendanceComponent } from './pages/configurations/org_structure/approve-attendance/approve-attendance.component';
import { RoleCreateComponent } from './pages/configurations/administration/role-create/role-create.component';
import { DelaysComponent } from './pages/configurations/config/delays/delays.component';
import { FormsModule } from '@angular/forms';
import { TimeManagementTestComponent } from './components/time-management-test/time-management-test.component';


@NgModule({
  declarations: [PunchInOutComponent, 
                TimeSheetViewComponent, 
                TimeSheetApproveComponent, 
                AbsentViewComponent, 
                TeamViewComponent, 

                WorkingDaysComponent, 
                WorkingTimeComponent, 
                DelaysComponent,

                WatcherLinkComponent, 
                WatcherActivationComponent, 

                RoleReportingComponent, 
                ApproveAttendanceComponent, 
                
                RoleCreateComponent, TimeManagementTestComponent,
                ],
  imports: [
    CommonModule,
    TimeManagementRoutingModule,
    TranslateModule.forChild(),
    SharedModule,
    FormsModule,
  ]
})
export class TimeManagementModule { }
