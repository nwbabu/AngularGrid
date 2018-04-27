import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hobies'
})
export class HobiesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
