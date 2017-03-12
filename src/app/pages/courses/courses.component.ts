import { Component, OnInit } from '@angular/core';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'courses',
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
  public courses: Course[];
  private cachedCourses: Course[];

  constructor(private coursesService: CoursesService) {}

  public ngOnInit() {
    this.coursesService.getCourses().then((courses) => {
      this.courses = courses;
      this.cacheCourses();
    });
  }

  public filter(query: string): void {
    const properties = [ 'name', 'date' ];

    this.courses = query ? this.filterBy(properties, query) : this.cachedCourses;
  }

  public deleteCourse(id: number): void {
    this.courses.splice(this.courses.findIndex((course) => course.id === id), 1);
    console.log('Deleted course:', id);
  }

  private filterBy(properties: string[], query: string): Course[] {
    return this.courses.filter((course: Course) => {
      return properties.some((property) => course[property].search(query) > -1);
    });
  }

  private cacheCourses(): void {
    this.cachedCourses = this.courses;
  }
}
