import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-log',
  templateUrl: './service-log.component.html',
  styleUrls: ['./service-log.component.css']
})
export class ServiceLogComponent {

  constructor(private route:Router) {}

login(Email: string,Password: string) {
  if (Email==='ravi@gmail.com' && Password==='12345'){
    return 200;
  }else {
    return 402;
  }
}
logout() {
  this.route.navigate(['home'])
}

}
