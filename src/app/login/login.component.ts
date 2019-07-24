import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authenticated: boolean;
  public invalidInput: boolean;
  public loginForm: FormGroup;
  public submitted: boolean;
  public returnUrl: string;

  public constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.authenticated = false;
    this.submitted = false;
    this.invalidInput = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.invalidInput = false;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.invalidInput = true;
      return;
    }
    if (this.f.username.value === 'admin' && this.f.password.value === 'password') {
      this.authenticated = true;
    }
  }
}
