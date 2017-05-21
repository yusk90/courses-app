import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'new-course',
  styleUrls: [ './new-course.scss' ],
  templateUrl: './new-course.html'
})

export class NewCourseComponent {
  public courseData: Course = {
    title: '',
    description: '',
    duration: 0,
    date: new Date().toISOString(),
    authors: [ 'Andrew Smith', 'John Doe', 'Jane Doe' ]
  };

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {}

  public addCourse(): void {
    this.coursesService.addCourse(this.courseData)
      .then(this.onAddSuccess.bind(this))
      .catch(this.onAddFail.bind(this));
  }

  private onAddSuccess(): void {
    this.router.navigate([ '/courses' ]);
  }

  private onAddFail(res): void {
    console.error(JSON.parse(res._body).error.message);
  }
}
