import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavigator } from './components/side-navigator/side-navigator';

const routes: Routes = [
  {
      path: '',
      component: SideNavigator
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
