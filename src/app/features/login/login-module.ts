import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { MaterialModule } from '../../material-module';



@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    Login
  ]
})
export class LoginModule { }
