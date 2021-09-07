import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateQuizService } from '../create-quiz.service';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.css']
})
export class CreateQuizFormComponent implements OnInit {
  maxQuestions = 10;
  noOfQuestionsentered = 1;
  constructor(
    public service: CreateQuizService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  add_question_set() {
    if (this.noOfQuestionsentered < this.maxQuestions) {
      this.noOfQuestionsentered += 1;
      this.service.questionSet.push({
        question: "",
        option_a: "",
        option_b: "",
        option_c: "",
        option_d: "",
        correct_options: []
      });
    } else {
      this.snackBar.open('You have reached the limit! Only 10 questions are allowed', '', { duration: 2000 });
    }
  }

  remove_question_set(indexToRemove: number) {
    this.service.questionSet.splice(indexToRemove, 1);
    this.noOfQuestionsentered -= 1;
  }

  save_quiz() {
    let goAhead = true;
    this.service.questionSet.forEach((obj) => {
      if (!this.service.quizName || !obj.question || obj.correct_options.length === 0 || !obj.option_a || !obj.option_b || !obj.option_c || !obj.option_d) {
        goAhead = false;
      }
    });
    if (goAhead) {
      this.service.create();
      console.log(this.service.questionSet);
    } else {
      this.snackBar.open("Fill all the required fields", '', { duration: 3000 });
    }
  }

  set_question(indexToEnterData: number, event: any) {
    this.service.questionSet.forEach((question_set, index) => {
      if (index === indexToEnterData) {
        question_set.question = event.target.value;
      }
    });
  }

  set_option(indexToEnterData: number, event: any, answerNo: number) {
    this.service.questionSet.forEach((question_set, index) => {
      if (index === indexToEnterData) {
        switch (answerNo) {
          case 1:
            question_set.option_a = event.target.value;
            break;

          case 2:
            question_set.option_b = event.target.value;
            break;

          case 3:
            question_set.option_c = event.target.value;
            break;

          case 4:
            question_set.option_d = event.target.value;
            break;
        }
      }
    });
  }

  set_correct_answer(indexToEnterData: number, event: any, answerNo: number) {
    this.service.questionSet.forEach((question_set, index) => {
      if (index === indexToEnterData) {
        if (event.checked) {
          question_set.correct_options.push(answerNo);
        }
        if (!event.checked) {
          const indexToDelete = question_set.correct_options.indexOf(answerNo);
          if (indexToDelete > -1) {
            question_set.correct_options.splice(indexToDelete, 1);
          }
        }
      }
    });

  }
}
