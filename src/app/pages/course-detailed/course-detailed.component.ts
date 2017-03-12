import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CoursesService } from '../../shared/courses.service';
import { Course } from '../../shared/course-interface';

@Component({
  selector: 'course-detailed',
  styleUrls: [ './course-detailed.scss' ],
  templateUrl: './course-detailed.html'
})

export class CourseDetailedComponent implements OnInit {
  public course: Course;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.coursesService.getCourseById(+params['id']))
      .subscribe((course) => this.course = course);
  }
}
