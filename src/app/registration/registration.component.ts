import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  constructor(private router:Router){ }

 ngOnInit() {}

 
 back(): void {
  this.router.navigate(['/home'])
}
 
onSubmit(): void {
   console.log(JSON.stringify(this.form, null, 2));
}

onReset(form: NgForm): void {
  form.reset();
}

register(form: NgForm): void{
  this.router.navigate(['/home'])
}

forms(f:NgForm){
 console.log(NgForm) 
 if (f.valid) this.router.navigate(['/home'])
}
}
