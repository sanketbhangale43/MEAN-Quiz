import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizScreenRootComponent } from './quiz-screen-root.component';

describe('QuizScreenRootComponent', () => {
  let component: QuizScreenRootComponent;
  let fixture: ComponentFixture<QuizScreenRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizScreenRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizScreenRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
