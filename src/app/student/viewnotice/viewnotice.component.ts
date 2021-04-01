import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-viewnotice',
  templateUrl: './viewnotice.component.html',
  styleUrls: ['./viewnotice.component.css']
})
export class ViewnoticeComponent implements OnInit {
notifications: any[]=[];//initially it has empty array.
acceptnoticedetails:any;
tnoticeHeaders:string[]=['S.NO','BATCHNUMBER','SUBJECT','MESSAGE','DATE'];
  constructor(private studentServ:StudentService) { }

  ngOnInit(): void {
    this.studentServ.rcvNotice().subscribe((data)=>{
      this. acceptnoticedetails=data;
      // console.log(data);
    })
  }

}
