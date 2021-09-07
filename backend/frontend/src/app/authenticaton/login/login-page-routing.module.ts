import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRootComponent } from './login-root/login-root.component';


const routes: Routes = [
  {
    path: '',
    component: LoginRootComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginPageRoutingModule { }
