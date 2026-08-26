import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  passwordVisible: boolean = true;
  inputType = "Password"
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      customerId: ['', Validators.required],

      password: ['', Validators.required]

    });
  }

  passwordVisiblity() {
    console.log("Value of passwordVisiblity", this.passwordVisiblity);

    this.passwordVisible = !this.passwordVisible
  }

  login() {

  }
}
