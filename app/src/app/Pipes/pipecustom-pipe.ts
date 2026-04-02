import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecustom',
})
export class PipecustomPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
 transform(value: number): string {
  if(value>1000) return 'gold';
  else if(value<500) return 'Silver';
  else return 'none';
   
 }

}
