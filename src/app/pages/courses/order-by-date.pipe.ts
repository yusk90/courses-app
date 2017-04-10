import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../../shared/course-interface';

@Pipe({
  name: 'orderByDate',
  pure: true
})
export class OrderByDatePipe implements PipeTransform {
  public transform(array: Course[], direction: string): Course[] {
    const sortedArray = array.sort((prev, next) => prev.dateInMs - next.dateInMs);

    if (direction === 'asc') {
      return sortedArray;
    }
    if (direction === 'desc') {
      return sortedArray.reverse();
    }

    return array;
  }
}
