import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagenoticeComponent } from './managenotice/managenotice.component';
import { ManageresultComponent } from './manageresult/manageresult.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'managenotice',component:ManagenoticeComponent},
    {path:'manageresult',component:ManageresultComponent},
    {path:'addadmin',component:AddadminComponent},
    {path:'viewadmin',component:ViewadminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
