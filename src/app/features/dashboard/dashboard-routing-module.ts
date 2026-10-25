import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavigator } from './components/side-navigator/side-navigator';
import { Home } from './components/home/home';

const routes: Routes = [
  {
    path: '',
    component: SideNavigator,
    children:
    [
      {
        path: '',
        component: Home
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
