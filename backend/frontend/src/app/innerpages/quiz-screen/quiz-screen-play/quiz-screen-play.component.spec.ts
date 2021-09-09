import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreenPlayComponent } from './quiz-screen-play.component';

describe('QuizScreenPlayComponent', () => {
  let component: QuizScreenPlayComponent;
  let fixture: ComponentFixture<QuizScreenPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizScreenPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScreenPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
