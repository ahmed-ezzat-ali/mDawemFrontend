import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBehaviorRoutingModule } from './user-behavior-routing.module';
import { UserBehaviorAnalysisComponent } from './page/user-behavior-analysis/user-behavior-analysis.component';
import { UserDataAnalysisComponent } from './page/user-data-analysis/user-data-analysis.component';
import { UserNetworkAnalysisComponent } from './page/user-network-analysis/user-network-analysis.component';
import { UserTrafficAnalysisComponent } from './page/user-traffic-analysis/user-traffic-analysis.component';
import { TrackScreenshotsComponent } from './page/track-screenshots/track-screenshots.component';
import { UserConnectivityComponent } from './page/user-connectivity/user-connectivity.component';


@NgModule({
  declarations: [UserBehaviorAnalysisComponent, UserDataAnalysisComponent, UserNetworkAnalysisComponent, UserTrafficAnalysisComponent, TrackScreenshotsComponent, UserConnectivityComponent],
  imports: [
    CommonModule,
    UserBehaviorRoutingModule
  ]
})
export class UserBehaviorModule { }
