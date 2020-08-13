import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private homeServ:HomeService) { }

  ngOnInit(): void {
  }
  login(form):void{
 
    this.homeServ.signIn(form.value).subscribe(result=>{

    if(result.msg=='wrong password'){
    alert("invalid password");
    }else if(result.msg=='access denied'){
alert('waiting for approval')
    }
    else if(result.msg=='student not existed'){
    alert('invalid username');
    }else{
      localStorage.setItem('username',result.username)
      localStorage.setItem('batchnumber',result.batchnumber)
      localStorage.setItem('firstname',result.firstname)
      if(result.msg=="admin"){
        console.log(result.msg)
        this.router.navigate(['admin'])
       
    
    }else{
      this.router.navigate(['student'])
    }
    }
    
    });
    
    form.reset();
    }
}
