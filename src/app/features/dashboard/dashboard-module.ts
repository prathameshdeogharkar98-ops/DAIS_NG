import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { SideNavigator } from './components/side-navigator/side-navigator';


@NgModule({
  declarations: [
    SideNavigator
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    SideNavigator
  ]
})
export class DashboardModule { }
