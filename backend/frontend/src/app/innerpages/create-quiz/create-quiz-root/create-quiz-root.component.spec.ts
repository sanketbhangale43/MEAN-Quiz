import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizRootComponent } from './create-quiz-root.component';

describe('CreateQuizRootComponent', () => {
  let component: CreateQuizRootComponent;
  let fixture: ComponentFixture<CreateQuizRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
