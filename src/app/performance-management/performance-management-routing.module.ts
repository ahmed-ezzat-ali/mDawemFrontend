import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductivityReportComponent } from './pages/productivity-report/productivity-report.component';
import { ProjectProgressComponent } from './pages/project-progress/project-progress.component';
import { ProjectionsComponent } from './pages/projections/projections.component';
import { TaskProgressComponent } from './pages/task-progress/task-progress.component';

const routes: Routes = [
  { path: 'productivity-report', component: ProductivityReportComponent },
  { path: 'project-progress', component: ProjectProgressComponent },
  { path: 'task-progress', component: TaskProgressComponent },
  { path: 'projections', component: ProjectionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class PerformanceManagementRoutingModule { }
