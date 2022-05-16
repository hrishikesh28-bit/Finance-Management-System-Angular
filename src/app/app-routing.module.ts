import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Adminlogin } from './adminlogin';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { IndexComponent } from './index/index.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'indexLink',
    pathMatch: 'full',
  },
  {
    path: 'indexLink',
    component: IndexComponent,
  },
  {path:'adminlogin',component:AdminloginComponent},
  {path:'admindashboard',component:AdminpageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
