import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { MaterialModule } from '../material-module';
import { Footer } from './components/footer/footer';



@NgModule({
  declarations: [
    Header,
    Footer
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [Header, Footer]
})
export class SharedModule { }
