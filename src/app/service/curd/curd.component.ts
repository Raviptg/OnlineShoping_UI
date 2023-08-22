import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent {
 
 public  serviceUrl: string;
  constructor (private http:HttpClient) {
    this.serviceUrl="http://localhost:3000/task"
  }
}
