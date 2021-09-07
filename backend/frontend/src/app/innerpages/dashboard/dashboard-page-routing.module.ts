import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardRootComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardPageRoutingModule { }
