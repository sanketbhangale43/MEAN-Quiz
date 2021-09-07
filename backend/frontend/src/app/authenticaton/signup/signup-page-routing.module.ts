import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupRootComponent } from './signup-root/signup-root.component';

const routes: Routes = [
  {
    path: '',
    component: SignupRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupPageRoutingModule { }
