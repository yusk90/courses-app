import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { AuthorizationService } from './authorization.service';
import { CoursesFilterService } from './courses-filter.service';
import { Course } from './course-interface';
import { API_URL } from './constants';

const state = {
  courses: []
};

const LAZY_LOADER = {
  config: {
    limit: 2,
    skip: 0,
  },
  update() {
    this.config.skip = this.config.skip + this.config.limit;

    return this.config;
  },
  reset() {
    this.config.skip = 0;

    return this.config;
  }
};

@Injectable()
export class CoursesService {
  public coursesCount;
  public searchQuery;

  constructor(
    private http: Http,
    private authorizationService: AuthorizationService,
    private coursesFilterService: CoursesFilterService,
    private datePipe: DatePipe
  ) {}

  public getState() {
    return state;
  }

  public getCourses(filterQuery = '') {
    return this.http
      .get(`${ API_URL }/courses?access_token=${ this.authorizationService.getToken() }${ filterQuery }`)
      .toPromise()
      .then((response) => this.prepareCourses(response.json()));
  }

  public get() {
    const pagination = LAZY_LOADER.reset();

    this.getCoursesCount();
    this.getCourses(this.coursesFilterService.buildFilterQuery({ pagination }))
      .then(this.setToState.bind(this));
  }

  public getCoursesCount(filterQuery = '') {
    return this.http
      .get(`${ API_URL }/courses/count?access_token=${ this.authorizationService.getToken() }${ filterQuery }`)
      .toPromise()
      .then((response) => this.coursesCount = response.json().count);
  }

  public setToState(courses) {
    state.courses = courses;
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

  public search(query: string): void {
    const pagination = LAZY_LOADER.reset();

    this.searchQuery = query;
    this.getCoursesCount(query && this.coursesFilterService.buildCountFilterQuery(query));
    const filterQuery = this.coursesFilterService.buildFilterQuery({
      search: { query },
      pagination
    });

    this.getCourses(filterQuery)
      .then(this.setToState.bind(this));
  }

  public loadMore() {
    const pagination = LAZY_LOADER.update();

    this.getCourses(this.coursesFilterService.buildFilterQuery({
      search: { query: this.searchQuery },
      pagination
    }))
      .then((courses) => state.courses.push(...courses));
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
