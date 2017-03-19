import { Injectable } from '@angular/core';

import { Course } from './course-interface';

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
  public getCourses(): Promise<Course[]> {
    return Promise.resolve(courses);
  }

  public getCourseById(id: number): Promise<Course> {
    return Promise.resolve(courses.find((course) => course.id === id));
  }

  public addCourse(course: Course): Course[] {
    console.log('Added course:', course);
    return courses;
  }

  public deleteCourse(id: number): Course[] {
    console.log('Deleted course:', id);
    return courses;
  }

  public updateCourse(course: Course): Course {
    console.log('Updated course:', course);
    return course;
  }
}
