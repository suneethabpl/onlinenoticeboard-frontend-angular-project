import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { OnlinenoticeboardComponent } from './onlinenoticeboard/onlinenoticeboard.component';
import {SharedModule}from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, LoginComponent, AboutusComponent, ContactComponent, RegisterComponent, OnlinenoticeboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,FormsModule,SharedModule,ReactiveFormsModule
  ]
})
export class HomeModule { }
