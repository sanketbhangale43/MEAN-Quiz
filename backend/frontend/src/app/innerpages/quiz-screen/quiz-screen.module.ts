import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { MaterialModule } from './../../material/material.module';
import { QuizScreenPageRoutingModule } from './quiz-screen-page-routing.module';
import { QuizScreenPlayComponent } from './quiz-screen-play/quiz-screen-play.component';
import { QuizScreenRootComponent } from './quiz-screen-root/quiz-screen-root.component';



@NgModule({
  declarations: [
    QuizScreenRootComponent,
    QuizScreenPlayComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    QuizScreenPageRoutingModule
  ]
})
export class QuizScreenModule { }
