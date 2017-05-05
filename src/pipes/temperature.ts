import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let c = Math.round(parseInt(value, 10) - 273.15);
    let f = Math.round(parseInt(value, 10) * 9/5 - 459.67);
    return `${f} ℉`;    
  }
}
