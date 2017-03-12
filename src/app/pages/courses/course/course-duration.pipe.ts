import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {
  public transform(value: number): string {
    const MINUTES_IN_HOUR = 60;
    const hours = Math.floor(value / MINUTES_IN_HOUR);
    const minutes = value % MINUTES_IN_HOUR;

    return hours ? `${ hours }h ${ minutes }m` : `${ minutes }m`;
  }
}
