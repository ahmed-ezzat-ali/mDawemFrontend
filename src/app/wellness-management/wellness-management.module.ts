import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellnessManagementRoutingModule } from './wellness-management-routing.module';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';
import { WorkoutAddComponent } from './pages/workout-add/workout-add.component';
import { WorkoutDetailsComponent } from './pages/workout-details/workout-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [WorkoutListComponent, WorkoutAddComponent, WorkoutDetailsComponent],
  imports: [
    CommonModule,
    WellnessManagementRoutingModule,
    SharedModule
  ]
})
export class WellnessManagementModule { }
