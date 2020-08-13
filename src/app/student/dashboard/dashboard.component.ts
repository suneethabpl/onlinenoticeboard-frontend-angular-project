import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
firstname:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.firstname=localStorage.getItem('firstname')
  }
logout():void{
  localStorage.clear();
this.router.navigate(["/"]);
}
}



