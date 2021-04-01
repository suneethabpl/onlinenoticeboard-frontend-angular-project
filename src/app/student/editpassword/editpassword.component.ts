import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css']
})
export class EditpasswordComponent implements OnInit {
isTrue:boolean;
form:any;

  constructor(private studentServ:StudentService) { }

  ngOnInit(): void {
  }
onSubmit(form):void{
console.log(form);//there is no id in console so we send object only.
this.studentServ.updatePwd(form).subscribe(result=>{//here we need to send form only not form.value to service file.
  //in this form,we have new password,confirmpassword and current/old password.
  if(result.msg=='done'){
    console.log(result);//here result is object. we gave msg is in the object. 
    alert('password is updated');
    // this.form.reset();

  }
  else{
    alert('pwd is not updated');
  }
})

}

check(form):void{
// console.log(form)
if(form.newpassword!=form.confirmpassword ){
  // alert("pwd not matched");
  this.isTrue=true;
}
else{
  this.isTrue=false;
}
}
}
