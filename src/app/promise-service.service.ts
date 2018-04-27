import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable()
export class PromiseServiceService {

  constructor() { }

 
  getPromise() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('Promise completed !!!!!!')
      }, 5000);
    }
  );
 }

}
