import { Injectable } from '@angular/core';

import { Course } from './course-interface';

const courses = [{
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
  public courses: Course[] = courses;

  public getCourses(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }

  public getCourseById(id: number): Promise<Course> {
    return Promise.resolve(this.courses.find((course) => course.id === id));
  }
}
