import { Component, Input } from '@angular/core';

import { Course } from './course';

@Component({
  selector: 'course',
  providers: [],
  styleUrls: [ './course.scss' ],
  templateUrl: './course.html'
})

export class CourseComponent {
  @Input()
  public course: Course;
}
