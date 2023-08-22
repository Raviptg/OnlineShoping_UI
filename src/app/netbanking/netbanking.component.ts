import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netbanking',
  templateUrl: './netbanking.component.html',
  styleUrls: ['./netbanking.component.css']
})
export class NetbankingComponent {

  constructor(private router:Router) {}

  b(){
    this.router.navigate(['/payment'])
  }
}
