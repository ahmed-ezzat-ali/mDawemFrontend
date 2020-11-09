import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceManagementRoutingModule } from './performance-management-routing.module';
import { TaskProgressComponent } from './pages/task-progress/task-progress.component';
import { ProjectProgressComponent } from './pages/project-progress/project-progress.component';
import { ProductivityReportComponent } from './pages/productivity-report/productivity-report.component';
import { ProjectionsComponent } from './pages/projections/projections.component';


@NgModule({
  declarations: [TaskProgressComponent, ProjectProgressComponent, ProductivityReportComponent, ProjectionsComponent],
  imports: [
    CommonModule,
    PerformanceManagementRoutingModule
  ]
})
export class PerformanceManagementModule { }
