import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './components/login/login';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Login,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    Login
  ]
})
export class LoginModule { }
