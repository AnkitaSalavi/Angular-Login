import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password:  new FormControl('', Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')),
    confirmPassword: new FormControl('')
  });

  onSubmit(): void {
    if (this.LoginForm.invalid) {
      return;
    }
  }
  
  ngOnInit(): void {
  }

}
