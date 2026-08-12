import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [
    Header
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[Header]
})
export class SharedModule { }
