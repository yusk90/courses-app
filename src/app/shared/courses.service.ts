import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthorizationService } from './authorization.service';
import { Course } from './course-interface';
import { API_URL } from './constants';

@Injectable()
export class CoursesService {
  constructor(
    private http: Http,
    private authorizationService: AuthorizationService
  ) {}

  public getCourses(): Promise<Course[]> {
    return this.http
      .get(`${ API_URL }/courses?access_token=${ this.authorizationService.getToken() }`)
      .toPromise()
      .then((response) => response.json() as Course[]);
  }

  public getCourseById(id: number): Promise<Course> {
    return this.http
      .get(`${ API_URL }/courses/${ id }?access_token=${ this.authorizationService.getToken() }`)
      .toPromise()
      .then((response) => response.json() as Course);
  }

  public addCourse(course: Course): Promise<any> {
    return this.http
      .post(`${ API_URL }/courses?access_token=${ this.authorizationService.getToken() }`, course)
      .toPromise();
  }

  public deleteCourse(id: number): Promise<any> {
    return this.http
      .delete(`${ API_URL }/courses/${ id }?access_token=${ this.authorizationService.getToken() }`)
      .toPromise();
  }

  public updateCourse(course: Course): Promise<any> {
    return this.http
      .patch(`${ API_URL }/courses/${ course.id }?access_token=${ this.authorizationService.getToken() }`, course)
      .toPromise();
  }
}
