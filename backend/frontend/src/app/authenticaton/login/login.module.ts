import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginRootComponent } from './login-root/login-root.component';
import { LoginService } from './login.service';


@NgModule({
  declarations: [LoginRootComponent, LoginCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    LoginPageRoutingModule,
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }
