import { Component, OnInit } from '@angular/core';
import{FormBuilder}from '@angular/forms';
import { HomeService } from 'src/app/shared/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm:any;
  constructor(private fb:FormBuilder,private homeServ:HomeService) { }

  ngOnInit(): void {
    this.initForm();
  
  }

  initForm(): void {
    this.regForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      emailid: [''],
      password:[''],
      batchnumber:[''],
      mobile:[''],
      releam:['student'],
      status:[true]

    });
  }

  postData():void{
    console.log(this.regForm.value);
    this.homeServ.signUp(this.regForm.value).subscribe(result=>{
      console.log(result);
      
  
      if(result.msg=='done'){
alert("registred successfully");
this.regForm.reset();
      }else{
alert('user already exist with same email id');
      }
    });
  
  }

 

}
