import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { Home1Component } from './pages/home1/home1.component';
import { Home2Component } from './pages/home2/home2.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [Home1Component, Home2Component, HomeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  entryComponents: []
})
export class LandingModule { }
