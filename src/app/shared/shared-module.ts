import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { MaterialModule } from '../material-module';
import { Footer } from './components/footer/footer';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    Header,
    Footer
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  exports: [Header, Footer]
})
export class SharedModule { }
