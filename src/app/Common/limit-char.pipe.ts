import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitChar'})
export class LimitCharPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    return value.slice(0,limit);
  }
}