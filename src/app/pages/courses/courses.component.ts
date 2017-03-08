import { Component, OnInit } from '@angular/core';

import { Course } from './course/course';

@Component({
  selector: 'courses',
  providers: [],
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
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
    date: 'ame',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  })];
  private cachedCourses: Course[];

  public ngOnInit() {
    this.cacheCourses();
  }

  public filter(query: string): void {
    const properties = [ 'name', 'date' ];

    this.courses = query ? this.filterBy(properties, query) : this.cachedCourses;
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
