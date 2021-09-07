import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizRootComponent } from './create-quiz-root/create-quiz-root.component';

const routes: Routes = [
  {
    path: '',
    component: CreateQuizRootComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateQuizPageRoutingModule { }
