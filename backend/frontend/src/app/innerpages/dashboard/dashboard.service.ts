import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from 'src/app/ApiUrls';
import { QuestionSet } from '../create-quiz/create-quiz.service';

export interface QuizDataType {
  _id: string;
  name: string;
  creator_id: string;
  questions: QuestionSet[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  loading = false;
  allQuizzes: QuizDataType[] = [];

  constructor(
    private http: HttpClient
  ) { }

  get_all_quizzes() {
    this.loading = true;
    // Request
    const requestObservable = this.http.get<any>(
      endpoints.AllQuizzes,
      { observe: 'response' }
    );

    // Response
    requestObservable.subscribe(
      res => {
        if (res.status === 200 && res.body.msg === 'success') {
          this.allQuizzes = res.body.data;
          this.allQuizzes.reverse();
        }
      },
      err => {
        this.loading = false;
      },
    );
  }
}
