import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/home.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-onlinenoticeboard',
  templateUrl: './onlinenoticeboard.component.html',
  styleUrls: ['./onlinenoticeboard.component.css']
})
export class OnlinenoticeboardComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private homeServ:HomeService) { }


  ngOnInit(): void {
   
  }



  
  }

