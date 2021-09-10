import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizScreenService } from '../quiz-screen.service';

@Component({
  selector: 'app-quiz-screen-play',
  templateUrl: './quiz-screen-play.component.html',
  styleUrls: ['./quiz-screen-play.component.css']
})
export class QuizScreenPlayComponent {
  submitted = false;
  score = 0;
  showCorrectAns = false;

  constructor(
    public service: QuizScreenService,
    private router: Router
  ) { }

  set_answer(event: any, questionNo: number, optionNo: number, multipleCorrectAns: boolean): void {
    if (!multipleCorrectAns) {
      this.service.quizData.questions[questionNo].selected_options.push(optionNo);
    }

    if (multipleCorrectAns) {
      if (event.checked) {
        this.service.quizData.questions[questionNo].selected_options.push(optionNo);
      }

      if (!event.checked) {
        const index = this.service.quizData.questions[questionNo].selected_options.indexOf(optionNo);
        if (index !== -1) {
          this.service.quizData.questions[questionNo].selected_options.splice(optionNo, 1);
        }
      }
    }
  }

  submit_quiz(): void {
    this.submitted = !this.submitted;
    this.showCorrectAns = !this.showCorrectAns;
    this.service.quizData.questions.forEach((obj, index) => {
      console.log(`Question ${index}`);
      let correctOptionsCount = obj.correct_options.length;
      const selectedOptionsCount = obj.selected_options.length;
      console.log(`correctOptionsCount ${correctOptionsCount}`);
      console.log(`selectedOptionsCount ${selectedOptionsCount}`);

      if (correctOptionsCount === selectedOptionsCount) {
        obj.selected_options.forEach((selectedOption) => {
          if (obj.correct_options.indexOf(selectedOption) !== -1) {
            correctOptionsCount -= 1;
            console.log('in');
          }
        });
      }

      console.log(`correctOptionsCount ${correctOptionsCount}`);
      if (correctOptionsCount === 0) {
        this.score += 1;
      }
    });
  }

  start_again(): void {
    this.score = 0;
    this.submitted = !this.submitted;
    this.showCorrectAns = !this.showCorrectAns;
    this.service.quizData.questions.forEach((obj) => {
      obj.selected_options = [];
    });
  }
}
