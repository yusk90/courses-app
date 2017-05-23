import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { AuthorizationService } from './authorization.service';
import { Course } from './course-interface';
import { API_URL } from './constants';

const state = {
  courses: []
};

@Injectable()
export class CoursesService {
  constructor(
    private http: Http,
    private authorizationService: AuthorizationService,
    private datePipe: DatePipe
  ) {}

  public getState() {
    return state;
  }

  public getCourses(query = '') {
    return this.http
      .get(`${ API_URL }/courses?${ query }access_token=${ this.authorizationService.getToken() }`)
      .toPromise()
      .then((response) => state.courses = this.prepareCourses(response.json()));
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

  public filter(query: string): void {
    this.getCourses(query && this.generateFilterQuery(query));
  }

  private generateFilterQuery(query: string) {
    const properties = [ 'title', 'description' ];

    const searchArray = properties.map((field) => {
      return {
        [field]: {
          like: query
        }
      };
    });

    return 'filter=' + JSON.stringify({
      where: {
        or: searchArray
      }
    }) + '&';
  }

  private prepareCourses(courses) {
    return courses.map((course: Course) => {
      const preparedCourse = Object.assign({}, course);

      preparedCourse.displayDate = this.datePipe.transform(course.date, 'dd-MM-yyyy');
      preparedCourse.dateInMs = new Date(course.date).getTime();
      preparedCourse.formattedAuthors = course.authors.join(', ');
      return preparedCourse;
    });
  }
}
