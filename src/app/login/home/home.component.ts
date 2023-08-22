import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { ServiceLogComponent } from 'src/app/service-log/service-log.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //  user = { Email: '',
  //           password: ''
  //          };

  Email="";
  Password="";
  errorMsg= "";

  constructor(private router:Router,
              private auth:ServiceLogComponent) {  }

ngOnInit() {}

onSubmit(form: NgForm) {

  console.log(form)
}

reset(myForm:any):void {
  myForm.form.reset();
}

Login()
{
  if (this,this.Email.trim().length===0){
    this.errorMsg="Email is required";
  } else if (this,this.Password.trim().length===0){
    this.errorMsg="Password is required";
  }   else
  { 
    this.errorMsg=""; 
    let res = this.auth.login(this.Email,this.Password);
    if (res===200){
      this.router.navigate(['user-home'])
    }if (res===402){
      this.errorMsg='Invalid Credentiales.... Plz Try Again';
    }
  }
}

}
