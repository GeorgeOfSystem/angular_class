import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expPipe'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: any, exponetial ?: any): any {
    return Math.pow( value, isNaN(exponetial) ? 1 : exponetial );
  }

}