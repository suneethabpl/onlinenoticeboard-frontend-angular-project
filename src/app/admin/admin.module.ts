import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagenoticeComponent } from './managenotice/managenotice.component';
import { ManageresultComponent } from './manageresult/manageresult.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';


@NgModule({
  declarations: [DashboardComponent, ManagenoticeComponent, ManageresultComponent, AddadminComponent, ViewadminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
