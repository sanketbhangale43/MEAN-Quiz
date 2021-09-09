import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizScreenService } from '../quiz-screen.service';

@Component({
  selector: 'app-quiz-screen-play',
  templateUrl: './quiz-screen-play.component.html',
  styleUrls: ['./quiz-screen-play.component.css']
})
export class QuizScreenPlayComponent implements OnInit {
  submitted = false;
  score = 0;
  showCorrectAns = false;

  constructor(
    public service: QuizScreenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  set_answer(event: any, questionNo: number, optionNo: number) {
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

  submit_quiz() {
    this.submitted = !this.submitted;
    this.showCorrectAns = !this.showCorrectAns;
    this.service.quizData.questions.forEach((obj) => {
      let correctOptionsCount = obj.correct_options.length;
      const selectedOptionsCount = obj.selected_options.length;

      if (correctOptionsCount === selectedOptionsCount) {
        obj.selected_options.forEach((selectedOption) => {
          if (obj.correct_options.indexOf(selectedOption) !== -1) {
            correctOptionsCount -= 1;
          }
        });
      }
      if (correctOptionsCount === 0) {
        this.score += 1;
      }
    });
  }

  start_again() {
    this.score = 0;
    this.submitted = !this.submitted;
    this.showCorrectAns = !this.showCorrectAns;
    this.service.quizData.questions.forEach((obj) => {
      obj.selected_options = [];
    });
  }
}
