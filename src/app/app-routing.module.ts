import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';


const routes: Routes = [
  {path:'home',loadChildren:()=>import("./home/home.module").then(s=>HomeModule)},
  {path:'admin',loadChildren:()=>import("./admin/admin.module").then(s=>AdminModule)},
  {path:'student',loadChildren:()=>import("./student/student.module").then(s=>StudentModule)},
  {path:'',redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
