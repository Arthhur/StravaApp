import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temps'})
export class TempsPipe implements PipeTransform {
  transform(value: number): string {
    const heures = Math.trunc(value / 3600);
    const minutes = Math.trunc((value % 3600) / 60);
    const secondes = Math.trunc(value % 60);
    if (heures.toString().length === 1) {
      return `0${heures}:${minutes}:${secondes}`;
    }
    else if (heures.toString().length === 2) {
      return `${heures}:${minutes}:${secondes}`;
    }
    else {
      return `${minutes}:${secondes}`;
    }
  }
}
