import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',redirectTo:'overview',pathMatch:'full'},
    {path:'overview',component:HomeComponent,pathMatch:'full'},
    {path:'student',component:StudentComponent,pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
