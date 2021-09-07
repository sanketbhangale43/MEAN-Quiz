import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { CreateQuizFormComponent } from './create-quiz-form/create-quiz-form.component';
import { CreateQuizPageRoutingModule } from './create-quiz-page-routing.module';
import { CreateQuizRootComponent } from './create-quiz-root/create-quiz-root.component';

@NgModule({
  declarations: [
    CreateQuizRootComponent,
    CreateQuizFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    CreateQuizPageRoutingModule,
  ]
})
export class CreateQuizModule { }
