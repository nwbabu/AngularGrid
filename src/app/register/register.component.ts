import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ObservableServiceService} from '../observable-service.service';
import { NgProgress } from 'ngx-progressbar';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  myform: FormGroup; 
  errMessage:string;
  constructor(public ngProgress: NgProgress,private Obx:ObservableServiceService) { }

  ngOnInit() {
    this.myform = new FormGroup({
      Email: new FormControl(),
      Password: new FormControl(),
      language: new FormControl()
  });
  }
 register():void
 {
  
    this.ngProgress.start();
    this.Obx.registerUser(this.myform.value)
   .subscribe((data:any)=>{
     console.log(data);
     this.ngProgress.done();
   },err=>
   {
     this.errMessage=err;
     this.ngProgress.done();
   });
 }
 
}
