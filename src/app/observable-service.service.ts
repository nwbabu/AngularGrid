import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ObservableServiceService {

  constructor(public httpclinet:HttpClient) { }
  getObservable() { 
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }
  registerUser(postData:any)
  {
    
    console.log(postData);
    return this.httpclinet.post('http://localhost:56224/api/UserRegistations/PostUserRegistation/',postData)
    .catch(this.handleError);
  }
  getRegisterUser()
  {
    return this.httpclinet.get('http://localhost:56224/api/UserRegistations/')
    .catch(this.handleError);
  }
  handleError(error:Response)
  {
    console.error(error);
    return Observable.throw(error|| "server Error");
  }
}
