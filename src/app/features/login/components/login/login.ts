import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../../sevices/login.service';

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

  constructor(private fb: FormBuilder,private loginService : LoginService) {

  }

  ngOnInit(): void {

    this.loginForm = this.fb.group({

      userName: ['', Validators.required],

      password: ['', Validators.required]

    });
  }

  passwordVisiblity() {
    console.log("Value of passwordVisiblity", this.passwordVisible);

    this.passwordVisible = !this.passwordVisible
  }

  clearForm(){
    this.loginForm.reset()
  }

  login() {
    console.log(this.loginForm.value["userName"],this.loginForm.value["password"]);
    this.loginService.login(this.loginForm.value["userName"],this.loginForm.value["password"])
  }
}
