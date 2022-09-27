import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  
    gender : string ="";

  constructor() { }

  RegForm = new FormGroup({
    fname: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
    lname: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
    address:new FormControl('', [Validators.pattern(/\s/), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password:  new FormControl('', Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')),
    confirmPassword: new FormControl('')
  });

  onSubmit(): void {
    if (this.RegForm.invalid) {
      return;
    }
  }



  ngOnInit(): void {
  }

}
