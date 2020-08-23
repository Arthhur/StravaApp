import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vitesse'})
export class VitessePipe implements PipeTransform {
  transform(value: number): number {
    return +(value * 3600 / 1000).toFixed(1);
  }
}
