import { TestBed } from '@angular/core/testing';

import { QuizScreenService } from './quiz-screen.service';

describe('QuizScreenService', () => {
  let service: QuizScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
