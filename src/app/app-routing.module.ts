import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  {
    path: 'registration',
    component: DashboardComponent
  },
  {
    path: 'review',
    component: ViewusersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
