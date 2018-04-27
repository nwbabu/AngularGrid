import { Component,Pipe } from '@angular/core';
import {joke} from './Joke'
import { promise } from 'protractor';
import{PromiseServiceService} from './promise-service.service'
import {ObservableServiceService} from './observable-service.service';
import { Observable, Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  constructor()
  {
    
  }
  title = 'app';
  //childData:string;
}
