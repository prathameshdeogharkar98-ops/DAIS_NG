import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../../sevices/login.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder,private loginService : LoginService, private router : Router ) {

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

  async login() {
    console.log(this.loginForm.value["userName"],this.loginForm.value["password"]);
    const response = await this.loginService.login(this.loginForm.value["userName"],this.loginForm.value["password"])
    console.log("Login Response ",response);
    if(response){
      console.log("Goto Dashboard");
      this.router.navigate(["dashboard"]);
    }else{
      console.log("Do Nothing");
    }
    
  }
}
