import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'isEven',
})
export class IsEvenPipe implements PipeTransform {
  transform(value: number) {
    if (value % 2 == 0) return 'male';
    return 'female';
  }
}
