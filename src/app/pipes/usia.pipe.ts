import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usia',
})
export class UsiaPipe implements PipeTransform {
  private getDaysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  transform(birthDate: string): string {
    const today = new Date();
    const birth = new Date(birthDate);

    const years = today.getFullYear() - birth.getFullYear();
    const months = today.getMonth() - birth.getMonth();
    const days = today.getDate() - birth.getDate();

    let ageString = '';

    if (months < 0 || (months === 0 && days < 0)) {
      ageString = `${years - 1} years, ${12 + months} months, ${
        this.getDaysInMonth(birth.getMonth(), birth.getFullYear()) + days
      } days`;
    } else {
      ageString = `${years} years, ${months} months, ${days} days`;
    }

    return ageString;
  }
}
