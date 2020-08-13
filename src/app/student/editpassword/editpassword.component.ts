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
console.log(form);
this.studentServ.updatePwd(form).subscribe(result=>{

  if(result.msg=='done'){
    console.log(result);
    alert('password is updated');


  }
  else{
    alert('pwd is not updated');
  }
})

}

check(form):void{

if(form.newpassword!=form.confirmpassword ){
 
  this.isTrue=true;
}
else{
  this.isTrue=false;
}
}
}
