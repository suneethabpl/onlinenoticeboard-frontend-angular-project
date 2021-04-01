import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  tprofileHeaders: string[] = ['S.NO', 'FIRST NAME', 'LAST NAME', 'EMAILID', 'MOBILENUMBER', 'EDIT'];
  profileForm: any;
  acceptprofiledetails: [];
  // data: object = {};
  data: any;
  student: any = {};

  constructor(private fb: FormBuilder, private studentServ: StudentService) { }

  ngOnInit(): void {
    this.initForm();
    this.getData();
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      firstname: [this.data ? this.data['firstname'] : ''],
      lastname: [this.data ? this.data['lastname'] : ''],
      emailid: [this.data ? this.data['emailid'] : ''],
      mobile: [this.data ? this.data['mobile'] : '']
    });
  }

  editData(detail: object): void {
    // console.log(detail)
    this.data = detail;
    this.initForm();

  }

  getData(): void {
    this.studentServ.rcvProfile().subscribe(result => {
      // console.log(result)
      this.acceptprofiledetails = result;
      this.student = result[0];
    })
  }

  updateProfile(): void {
    this.profileForm.value._id = this.data['_id'];
    this.studentServ.updateData(this.profileForm.value).subscribe(result => {
      this.getData();
      this.profileForm.reset();
    })
  }


}
