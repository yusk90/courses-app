import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course-interface';

const apiUrl = 'http://localhost:3000/api';

@Injectable()
export class CoursesService {
  constructor(private http: Http) {}

  public getCourses(): Promise<Course[]> {
    return this.http
      .get(`${ apiUrl }/courses`)
      .toPromise()
      .then((response) => response.json() as Course[]);
  }

  public getCourseById(id: number): Promise<Course> {
    return this.http
      .get(`${ apiUrl }/courses/${ id }`)
      .toPromise()
      .then((response) => response.json() as Course);
  }

  public addCourse(course: Course): Promise<any> {
    return this.http
      .post(`${ apiUrl }/courses`, course)
      .toPromise();
  }

  public deleteCourse(id: number): Promise<any> {
    return this.http
      .delete(`${ apiUrl }/courses/${ id }`)
      .toPromise();
  }

  public updateCourse(course: Course): Promise<any> {
    return this.http
      .patch(`${ apiUrl }/courses/${ course.id }`, course)
      .toPromise();
  }
}
