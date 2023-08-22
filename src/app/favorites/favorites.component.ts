import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  constructor(private router:Router){}

  back(): void {
    this.router.navigate(['/user-home'])
  }
}
