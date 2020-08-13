import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewnoticeComponent } from './viewnotice/viewnotice.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'viewnotice',component:ViewnoticeComponent},
    {path:'viewresult',component:ViewresultComponent},
    {path:'editprofile',component:EditprofileComponent},
    {path:'editpassword',component:EditpasswordComponent}
  ]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
