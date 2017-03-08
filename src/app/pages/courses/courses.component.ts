import { Component } from '@angular/core';

import { Course } from './course/course';

@Component({
  selector: 'courses',
  providers: [],
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent {
  public courses: Course[] = [new Course({
    id: 1,
    name: 'Name 1',
    duration: '1h 28m',
    date: 'date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }), new Course({
    id: 2,
    name: 'Name 2',
    duration: '1h 28m',
    date: 'date',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  })];
}
