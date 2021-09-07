import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { InnerNavbarComponent } from './inner-navbar/inner-navbar.component';
import { OuterNavbarComponent } from './outer-navbar/outer-navbar.component';



@NgModule({
  declarations: [
    OuterNavbarComponent,
    InnerNavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    OuterNavbarComponent,
    InnerNavbarComponent
  ]
})
export class NavbarModule { }
