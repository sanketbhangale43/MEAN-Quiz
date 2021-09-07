import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { endpoints } from './../../ApiUrls';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signUpForm = new FormGroup({
    NameField: new FormControl('', [
      Validators.required,
    ]),
    EmailField: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
    ]),
    PasswordField: new FormControl('', [
      Validators.required,
    ]),
  });
  loading = false;


  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private cookieService: CookieService
  ) { }


  signup() {
    if (this.signUpForm.valid) {
      this.loading = true;
      const formdata = this.signUpForm.value;
      const data = {
        'name': formdata.NameField,
        'email': formdata.EmailField,
        'password': formdata.PasswordField
      }

      // Request
      const requestObservable = this.http.post<any>(
        endpoints.SignupApi, data,
        {
          observe: 'response', headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Response
      requestObservable.subscribe(
        res => {
          if (res.status === 200) {
            if (res.body.msg === 'success') {
              // Get and set the token
              const token = res.body.token;
              this.cookieService.set('token', token);

              this.loading = false;
              this.router.navigate(['/dashboard']);
            }
            if (res.body.msg === 'email already exists') {
              this.loading = false;
              this.snackBar.open('email already exists', '', { duration: 2000 });
            }
          }
        },
        err => {
          this.loading = false;
        },
      );
    } else {
      this.loading = false;
      this.snackBar.open('Please fill all the fields carefully', '', { duration: 2000 });
    }
  }
}
