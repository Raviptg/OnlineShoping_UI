import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router:Router){}

  back(): void {
    this.router.navigate(['/user-home'])
  }

  pay() {
    this.router.navigate(['payment'])
  }
}
