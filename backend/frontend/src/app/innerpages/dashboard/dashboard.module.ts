import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';


@NgModule({
  declarations: [
    DashboardRootComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    DashboardPageRoutingModule,
  ]
})
export class DashboardModule { }
