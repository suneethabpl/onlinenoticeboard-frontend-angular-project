import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent implements OnInit {

    regForm:any;
  //   acceptstudentdetails: object[] = [];
    acceptstudentdetails:[];
    tableHeaders: string[] = ['sno','firstname','lastname','emailid','batchnumber','mobile',"status","delete"];
  constructor(private adminServ: AdminService) { }

  ngOnInit(): void {
    this.getData();
  }

  status(data:object):void{
    data['status']=!data['status'];
    this.adminServ.updateData(data).subscribe(result=>{

    })
  }
    getData(): void {
        this.adminServ.readData().subscribe(result => {
          console.log(result)
          this.acceptstudentdetails = result;
        })
      }



    deleteData(ind,studentdetail):void{
      this.adminServ.removeData(studentdetail).subscribe(result=>{
    console.log(result)
      this.acceptstudentdetails.splice(ind,1);
      });
    }
}
