import { Injectable } from '@angular/core';
import {CanActivate,CanDeactivate} from '@angular/router';


@Injectable()
export class AuthService implements CanActivate {

  constructor() { }
  canActivate():boolean
  {
     return confirm('Are You want go to Register page');
  }
  /*canDeactivate(template:AboutComponent):boolean
  {
     return confirm('Are You want go from  About page');
  }*/

}
