import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateQuizService } from '../create-quiz.service';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.css']
})
export class CreateQuizFormComponent implements OnDestroy {
  maxQuestions = 10;
  noOfQuestionsentered = 1;
  constructor(
    public service: CreateQuizService,
    private snackBar: MatSnackBar
  ) { }


  ngOnDestroy(): void {
    // Reset variables
    this.service.questionSet = [];
    this.service.questionSet.push({
      question: '',
      option_a: '',
      option_b: '',
      option_c: '',
      option_d: '',
      correct_options: [],
      selected_options: [],
      multiple_correct_answers: false
    });
    this.noOfQuestionsentered = 1;
  }

  add_question_set(): void {
    if (this.noOfQuestionsentered < this.maxQuestions) {
      this.noOfQuestionsentered += 1;
      this.service.questionSet.push({
        question: '',
        option_a: '',
        option_b: '',
        option_c: '',
        option_d: '',
        correct_options: [],
        selected_options: [],
        multiple_correct_answers: false
      });
    } else {
      this.snackBar.open('You have reached the limit! Only 10 questions are allowed', '', { duration: 2000 });
    }
  }

  remove_question_set(indexToRemove: number): void {
    this.service.questionSet.splice(indexToRemove, 1);
    this.noOfQuestionsentered -= 1;
  }

  save_quiz(): void {
    let goAhead = true;
    this.service.questionSet.forEach((obj) => {
      if (!this.service.quizName || !obj.question ||
        obj.correct_options.length === 0 || !obj.option_a ||
        !obj.option_b || !obj.option_c || !obj.option_d) {
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

  set_question(indexToEnterData: number, event: any): void {
    this.service.questionSet.forEach((questionSet, index) => {
      if (index === indexToEnterData) {
        questionSet.question = event.target.value;
      }
    });
  }

  set_option(indexToEnterData: number, event: any, answerNo: number): void {
    this.service.questionSet.forEach((questionSet, index) => {
      if (index === indexToEnterData) {
        switch (answerNo) {
          case 1:
            questionSet.option_a = event.target.value;
            break;

          case 2:
            questionSet.option_b = event.target.value;
            break;

          case 3:
            questionSet.option_c = event.target.value;
            break;

          case 4:
            questionSet.option_d = event.target.value;
            break;
        }
      }
    });
  }

  set_correct_answer(indexToEnterData: number, event: any, answerNo: number, multipleCorrect: boolean): void {
    if (!multipleCorrect) {
      this.service.questionSet[indexToEnterData].correct_options = [];
      this.service.questionSet[indexToEnterData].correct_options.push(answerNo);
    }
    else {
      if (event.checked) {
        this.service.questionSet[indexToEnterData].correct_options.push(answerNo);
      }
      if (!event.checked) {
        const indexToDelete = this.service.questionSet[indexToEnterData].correct_options.indexOf(answerNo);
        if (indexToDelete > -1) {
          this.service.questionSet[indexToEnterData].correct_options.splice(indexToDelete, 1);
        }
      }
    }
    console.log(this.service.questionSet[indexToEnterData].correct_options);
  }

  change_question_type(indexToEnterData: number): void {
    console.log(indexToEnterData);
    console.log(this.service.questionSet[indexToEnterData].multiple_correct_answers);
    this.service.questionSet[indexToEnterData].multiple_correct_answers = !this.service.questionSet[indexToEnterData].multiple_correct_answers;
    console.log(this.service.questionSet[indexToEnterData].multiple_correct_answers);

    this.service.questionSet[indexToEnterData].correct_options = [];
  }
}
