import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 gorRegister()
 {
   console.log('Register component')
   this.route.navigate(['register']);
 }
 callAsyncService()
 {
  console.log('Async component')
  this.route.navigate(['Async']);
 }
 getUserDetails()
 {
   this.route.navigate(['userInfo']);
 }
 getTableComponent()
 {
   this.route.navigate(['AngTable'])
 }
}
