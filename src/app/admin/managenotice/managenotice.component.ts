import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import{FormBuilder}from '@angular/forms';


@Component({
  selector: 'app-managenotice',
  templateUrl: './managenotice.component.html',
  styleUrls: ['./managenotice.component.css']
})
export class ManagenoticeComponent implements OnInit {
  tnoticeHeaders: string[] = ['S.NO', 'Batchnumber', 'Subject', 'Message', 'Date', 'Edit', 'Delete'];
  acceptnoticedetails:object[]= [];
  data: object = {};
  noticeForm: any;
  isUpdate: boolean;
  constructor(private fb:FormBuilder,private adminServ:AdminService) { }

  ngOnInit(): void {
    this.initForm();
   this.getData();
  }
  initForm(): void {
    // this.noticeForm = this.fb.group({
    //   batchnumber: [''],
    //   subject: [''],
    //   message: [''],
    //   date: ['']
    // });
    this.noticeForm = this.fb.group({
      batchnumber: [this.data ? this.data['batchnumber']:''],
      subject: [this.data ? this.data['subject']:''],
      message: [this.data ? this.data['message']:''],
      date: [this.data ? this.data['date']:'']
    });
  }
postData():void{
  this.adminServ.postNotice(this.noticeForm.value).subscribe(result=>{
    if(result.msg=='done'){
      this.noticeForm.reset();
      alert("Notification posted");
    }else{
      alert("Notification not posted");
    }
  });
}
editData(detail: object): void {
  console.log(detail)
  this.data = detail;
  this.initForm();
  this.isUpdate = true;
}

updateData(): void {
  console.log(this.data['_id'])//we can see id when we click edit and update.
  this.noticeForm.value._id=this.data['_id'];
  console.log(this.noticeForm.value);//this.profile.value has _id because we give it explicitly. 
//     //not get/generate automatically. 
this.adminServ.updateNotice(this.noticeForm.value).subscribe(result=>{
// console.log(123)
console.log(result);
this.getData();
this.isUpdate = false;
this.noticeForm.reset();
})
}

  getData(): void {
      this.adminServ. getNotice().subscribe(result => {
        console.log(result)
        this.acceptnoticedetails = result;
      })
    }



  deleteData(ind,noticedetail):void{
    this.adminServ. removeNotice(noticedetail).subscribe(result=>{
  console.log(result)
    this.acceptnoticedetails.splice(ind,1);
    });
  }

}
