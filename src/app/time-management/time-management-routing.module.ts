import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AbsentViewComponent } from './pages/absent-view/absent-view.component';
import { RoleCreateComponent } from './pages/configurations/administration/role-create/role-create.component';
import { DelaysComponent } from './pages/configurations/config/delays/delays.component';
import { WorkingDaysComponent } from './pages/configurations/config/working-days/working-days.component';
import { WorkingTimeComponent } from './pages/configurations/config/working-time/working-time.component';
import { ApproveAttendanceComponent } from './pages/configurations/org_structure/approve-attendance/approve-attendance.component';
import { RoleReportingComponent } from './pages/configurations/org_structure/role-reporting/role-reporting.component';
import { WatcherActivationComponent } from './pages/configurations/watcher/watcher-activation/watcher-activation.component';
import { WatcherLinkComponent } from './pages/configurations/watcher/watcher-link/watcher-link.component';
import { PunchInOutComponent } from './pages/punch-in-out/punch-in-out.component';
import { TeamViewComponent } from './pages/team-view/team-view.component';
import { TimeSheetApproveComponent } from './pages/time-sheet-approve/time-sheet-approve.component';
import { TimeSheetViewComponent } from './pages/time-sheet-view/time-sheet-view.component';

const routes: Routes = [
  {path:'',component:PunchInOutComponent},
  {path:'punch_in_out',component:PunchInOutComponent },
  {path:'time-sheet-view',component:TimeSheetViewComponent, canActivate: [AuthGuardService]},
  {path:'absent-view',component:AbsentViewComponent},
  {path:'team-view',component:TeamViewComponent},
  {path:'time-sheet-approve',component:TimeSheetApproveComponent},

  {path:'config/working_days',component:WorkingDaysComponent},
  {path:'config/working_times',component:WorkingTimeComponent},
  {path:'config/delayes',component:DelaysComponent},
  {path:'config/watcher_link',component:WatcherLinkComponent},
  {path:'config/watcher_activation',component:WatcherActivationComponent},
  {path:'config/role_reporting',component:RoleReportingComponent},
  {path:'config/approve_attendance',component:ApproveAttendanceComponent},
  {path:'config/create-role',component:RoleCreateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeManagementRoutingModule { }
