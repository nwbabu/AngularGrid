import { Component, OnInit } from '@angular/core';
import {joke} from '../Joke'
import { promise } from 'protractor';
import{PromiseServiceService} from '../promise-service.service'
import {ObservableServiceService} from '../observable-service.service';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  dateval:Date= new Date();
  promisedata:Promise<any>;
  observableData:Observable<number>;
  jokes:joke[];
  constructor(private ObjPromise:PromiseServiceService,private ObjObser:ObservableServiceService)
  {
    this.jokes=[
      new joke("What did the cheese say when it looked in the mirror?","Hello-Me (Halloumi)"),
      new joke("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
      new joke("A kid threw a lump of cheddar at me","I thought ‘That’s not very mature")
    ];
    this.promisedata=ObjPromise.getPromise();
    this.observableData=ObjObser.getObservable();
  }
  
  childData:string;

  ngOnInit() {
  }

}
