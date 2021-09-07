import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SignupCardComponent } from './signup-card/signup-card.component';
import { SignupPageRoutingModule } from './signup-page-routing.module';
import { SignupRootComponent } from './signup-root/signup-root.component';
import { SignupService } from './signup.service';



@NgModule({
  declarations: [
    SignupRootComponent,
    SignupCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    SignupPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    SignupService
  ]
})
export class SignupModule { }
