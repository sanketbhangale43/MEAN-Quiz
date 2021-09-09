import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizScreenService } from '../quiz-screen.service';

@Component({
  selector: 'app-quiz-screen-root',
  templateUrl: './quiz-screen-root.component.html',
  styleUrls: ['./quiz-screen-root.component.css']
})
export class QuizScreenRootComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: QuizScreenService) { }

  ngOnInit(): void {
    this.service.quizId = this.activatedRoute.snapshot.params.quiz_id;
    this.service.get_quiz_data();
  }
}
