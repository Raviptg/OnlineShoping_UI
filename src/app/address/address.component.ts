import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  form = {
    fullname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    drno:'',
    landmark:'',
    village:'',
    mandel:'',
    district:'',
    state:'',
    pincode:''
  };

  constructor(private router:Router){}
  
   back(): void {
  this.router.navigate(['/profile'])
}
 
onSubmit(): void {
   console.log(JSON.stringify(this.form, null, 2));
}

onReset(form: NgForm): void {
  form.reset();
  form.resetForm();  
}

register(form: NgForm): void{
  this.router.navigate(['/home'])
}

forms(){
console.log(NgForm)
}
}
