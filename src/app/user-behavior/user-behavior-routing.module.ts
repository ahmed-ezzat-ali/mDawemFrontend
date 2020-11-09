import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackScreenshotsComponent } from './page/track-screenshots/track-screenshots.component';
import { UserBehaviorAnalysisComponent } from './page/user-behavior-analysis/user-behavior-analysis.component';
import { UserConnectivityComponent } from './page/user-connectivity/user-connectivity.component';
import { UserDataAnalysisComponent } from './page/user-data-analysis/user-data-analysis.component';
import { UserNetworkAnalysisComponent } from './page/user-network-analysis/user-network-analysis.component';
import { UserTrafficAnalysisComponent } from './page/user-traffic-analysis/user-traffic-analysis.component';

const routes: Routes = [
  { path: 'behavior-analysis', component: UserBehaviorAnalysisComponent },
  { path: 'data-analysis', component: UserDataAnalysisComponent },
  { path: 'network-analysis', component: UserNetworkAnalysisComponent },
  { path: 'traffic-analysis', component: UserTrafficAnalysisComponent },
  { path: 'track-screenshots', component: TrackScreenshotsComponent },
  { path: 'connectivity', component: UserConnectivityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBehaviorRoutingModule { }
