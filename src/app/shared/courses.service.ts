import { Injectable } from '@angular/core';

import { Course } from './course-interface';

const state = {
  courses: []
};

const courses: Course[] = [{
  id: 1,
  name: 'Name 1',
  duration: 45,
  date: 'date',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
}, {
  id: 2,
  name: 'Name 2',
  duration: 75,
  date: 'ame',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
}];

@Injectable()
export class CoursesService {
  public getState() {
    return state;
  }

  public get(): void {
    this.getCourses().then((data) => {
      state.courses = data;
    });
  }

  public getCourses(): Promise<Course[]> {
    return Promise.resolve(courses);
  }

  public getCourseById(id: number): Promise<Course> {
    return Promise.resolve(courses.find((course) => course.id === id));
  }
}
