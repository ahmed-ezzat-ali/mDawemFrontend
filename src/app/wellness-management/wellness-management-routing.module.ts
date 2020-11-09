import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutAddComponent } from './pages/workout-add/workout-add.component';
import { WorkoutDetailsComponent } from './pages/workout-details/workout-details.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';

const routes: Routes = [

  { path: '', component: WorkoutListComponent },
  { path: 'add', component: WorkoutAddComponent },
  { path: ':id', component: WorkoutDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellnessManagementRoutingModule { }
