import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-dashboard-root',
  templateUrl: './dashboard-root.component.html',
  styleUrls: ['./dashboard-root.component.css']
})
export class DashboardRootComponent implements OnInit {

  constructor(
    public router: Router,
    public service: DashboardService
  ) { }

  ngOnInit(): void {
    this.service.get_all_quizzes();
  }

  open_create_quiz_page() {
    this.router.navigate(['/quiz/create']);
  }

  start_quiz(quizId: string) {
    this.router.navigate([`/quiz/play/${quizId}`]);
  }
}
