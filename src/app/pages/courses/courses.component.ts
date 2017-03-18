import { Component, OnInit } from '@angular/core';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'courses',
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
  public coursesState;

  constructor(private coursesService: CoursesService) {
    coursesService.get();
  }

  public ngOnInit() {
    this.coursesState = this.coursesService.getState();
  }

  public filter(query: string): void {
    const properties = [ 'name', 'date' ];

    this.coursesState.courses = query ? this.filterBy(properties, query) : this.coursesState.courses;
  }

  public deleteCourse(id: number): void {
    this.coursesState.courses.splice(this.coursesState.courses.findIndex((course) => course.id === id), 1);
    console.log('Deleted course:', id);
  }

  private filterBy(properties: string[], query: string): Course[] {
    return this.coursesState.courses.filter((course: Course) => {
      return properties.some((property) => course[property].search(query) > -1);
    });
  }
}
