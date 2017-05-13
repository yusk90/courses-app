import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course-interface';
import { API_URL } from './constants';

@Injectable()
export class CoursesService {
  constructor(private http: Http) {}

  public getCourses(): Promise<Course[]> {
    return this.http
      .get(`${ API_URL }/courses`)
      .toPromise()
      .then((response) => response.json() as Course[]);
  }

  public getCourseById(id: number): Promise<Course> {
    return this.http
      .get(`${ API_URL }/courses/${ id }`)
      .toPromise()
      .then((response) => response.json() as Course);
  }

  public addCourse(course: Course): Promise<any> {
    return this.http
      .post(`${ API_URL }/courses`, course)
      .toPromise();
  }

  public deleteCourse(id: number): Promise<any> {
    return this.http
      .delete(`${ API_URL }/courses/${ id }`)
      .toPromise();
  }

  public updateCourse(course: Course): Promise<any> {
    return this.http
      .patch(`${ API_URL }/courses/${ course.id }`, course)
      .toPromise();
  }
}
