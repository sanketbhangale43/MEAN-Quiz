import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { endpoints } from 'src/app/ApiUrls';

export interface QuestionSet {
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_options: number[];
  selected_options: number[];
  multiple_correct_answers: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {
  questionSet: QuestionSet[] = [
    {
      question: '',
      option_a: '',
      option_b: '',
      option_c: '',
      option_d: '',
      correct_options: [],
      selected_options: [],
      multiple_correct_answers: false
    }
  ];
  quizName = '';
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }


  auth(): void {
    // Request
    const requestObservable = this.http.get<any>(
      endpoints.AuthApi,
      {
        observe: 'response', headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Response
    requestObservable.subscribe(
      res => {
      },
      err => {
        this.loading = false;
      },
    );
  }

  create(): void {
    this.loading = true;
    const data = {
      'quiz_name': this.quizName,
      'questions_arr': JSON.stringify(this.questionSet),
    }

    // Request
    const requestObservable = this.http.post<any>(
      endpoints.CreateQuizApi, data,
      {
        observe: 'response', headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Response
    requestObservable.subscribe(
      res => {
        if (res.status === 200) {
          if (res.body.msg === 'success') {
            this.quizName = '';
            this.loading = false;
            this.router.navigate(['/dashboard']);
          }
          if (res.body.msg === 'email already exists') {
            this.loading = false;
            this.snackBar.open('email already exists', '', { duration: 2000 });
          }
        }
      },
      err => {
        this.loading = false;
      },
    );
  }
}
