import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewnoticeComponent } from './viewnotice/viewnotice.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';


@NgModule({
  declarations: [DashboardComponent, ViewnoticeComponent, ViewresultComponent, EditprofileComponent, EditpasswordComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class StudentModule { }
