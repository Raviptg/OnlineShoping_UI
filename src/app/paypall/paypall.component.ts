import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paypall',
  templateUrl: './paypall.component.html',
  styleUrls: ['./paypall.component.css']
})
export class PaypallComponent {

  constructor(private router:Router ) {}

  b(){
    this.router.navigate(['/payment'])
  }
}
