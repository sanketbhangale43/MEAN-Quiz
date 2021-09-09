import { Component, OnInit } from '@angular/core';
import { CreateQuizService } from '../create-quiz.service';

@Component({
  selector: 'app-create-quiz-root',
  templateUrl: './create-quiz-root.component.html',
  styleUrls: ['./create-quiz-root.component.css']
})
export class CreateQuizRootComponent implements OnInit {

  constructor(
    private service: CreateQuizService
  ) { }

  ngOnInit(): void {
    this.service.auth();
  }
}
