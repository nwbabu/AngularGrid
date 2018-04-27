import { Component, OnInit,Input,Output,EventEmitter,OnDestroy} from '@angular/core';
import{PromiseServiceService} from '../promise-service.service';
import{ObservableServiceService} from '../observable-service.service';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  inputs:['pdata'],
  outputs:['childEvent']
})
export class HomeComponent implements OnInit,OnDestroy {

  public pdata:string;
  childEvent= new EventEmitter();
  promiseData:any;
  Observabledata:number;
  subscription: Subscription = null;
  constructor(private Objpromice:PromiseServiceService,private objObser:ObservableServiceService) {
    //promise Call
    this.Objpromice.getPromise().then(v => this.promiseData = v); 
    //Observable Call
    this.ObservableScribe();
  }

  ngOnInit() {
  }
  onChange(val:string)
  {
    this.childEvent.emit(val);
  }
  ObservableScribe()
  {
    this.subscription=this.objObser.getObservable()
    .subscribe(v=>this.Observabledata=v);
  }
  
  ngOnDestroy() { 
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
