import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRootComponent } from './signup-root.component';

describe('SignupRootComponent', () => {
  let component: SignupRootComponent;
  let fixture: ComponentFixture<SignupRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
