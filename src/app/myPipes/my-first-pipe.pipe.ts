import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirstPipe'
})
export class MyFirstPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'hi' + value;
  }

}