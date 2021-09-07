import { Component, OnInit } from '@angular/core';
import { SignupService } from './../signup.service';

@Component({
  selector: 'app-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.css']
})
export class SignupCardComponent implements OnInit {
  hide = true;
  constructor(
    public service: SignupService
  ) { }

  ngOnInit(): void {
  }
}
