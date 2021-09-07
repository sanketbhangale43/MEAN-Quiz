import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTokenInterceptor } from './add-token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationRoutingModule } from './authenticaton/authentication-routing.module';
import { InnerpagesRoutingModule } from './innerpages/innerpages-routing.module';
import { MaterialModule } from './material/material.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Custom Routing
    AuthenticationRoutingModule,
    InnerpagesRoutingModule
  ],

  exports: [
    MaterialModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
