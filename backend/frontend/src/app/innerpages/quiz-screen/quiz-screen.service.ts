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
export class QuizScreenService {
  quizId = '';
  loading = false;
  quizData: QuizDataType;

  constructor(
    private http: HttpClient
  ) {
    this.quizData = {
      _id: '',
      name: '',
      creator_id: '',
      questions: []
    };
  }

  get_quiz_data(): void {
    this.loading = true;
    // Params
    const params = {
      quiz_id: this.quizId
    };

    // Request
    const requestObservable = this.http.get<any>(
      endpoints.QuizApi,
      { observe: 'response', params }
    );

    // Response
    requestObservable.subscribe(
      res => {
        if (res.status === 200 && res.body.msg === 'success') {
          this.loading = false;
          this.quizData = res.body.data;
        }
      },
      err => {
        this.loading = false;
      },
    );
  }
}
