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

  public getCourses(filterQuery = '') {
    return this.http
      .get(`${ API_URL }/courses?access_token=${ this.authorizationService.getToken() }${ filterQuery }`)
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

  public search(searchQuery: string): void {
    this.getCourses(this.generateFilterQuery({ searchQuery }));
  }

  private generateFilterQuery(queryObject): string {
    const searchObj = {};

    if (queryObject.searchQuery) {
      Object.assign(searchObj, this.generateSearchOject(queryObject.searchQuery));
    }

    if (queryObject.pagination) {
      let { limit, skip } = queryObject.pagination;

      Object.assign(searchObj, this.generatePaginationObject(limit, skip));
    }

    if (!Object.keys(searchObj).length) {
      return '';
    }

    return `&filter=${ JSON.stringify(searchObj) }`;
  }

  private generateSearchOject(query: string) {
    const properties = [ 'title', 'description' ];
    const searchArray = properties.map((field) => {
      return {
        [field]: {
          like: query
        }
      };
    });

    return { where: { or: searchArray } };
  }

  private generatePaginationObject(limit: number, skip: number) {
    return { limit, skip };
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
