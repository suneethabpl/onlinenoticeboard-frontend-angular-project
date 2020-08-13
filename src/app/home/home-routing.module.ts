import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { OnlinenoticeboardComponent } from './onlinenoticeboard/onlinenoticeboard.component';


const routes: Routes = [
  {path:"",component:DashboardComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'about',component:AboutusComponent},
    {path:'contact',component:ContactComponent},
    {path:'onlinenoticeboard',component:OnlinenoticeboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
