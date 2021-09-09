import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizScreenRootComponent } from './quiz-screen-root/quiz-screen-root.component';


const routes: Routes = [
  {
    path: '',
    component: QuizScreenRootComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizScreenPageRoutingModule { }
