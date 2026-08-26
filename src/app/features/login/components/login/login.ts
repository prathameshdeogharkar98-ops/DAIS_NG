import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {

  passwordVisible: boolean = true;
  inputType = "Password"

  constructor() {

  }

  ngOnInit(): void {
  }

  passwordVisiblity() {
    console.log("Value of passwordVisiblity",this.passwordVisiblity);
    
    this.passwordVisible = !this.passwordVisible
  }

}
