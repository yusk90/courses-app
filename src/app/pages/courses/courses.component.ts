import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';
import { ModalService } from '../../shared/modal/modal.service';

@Component({
  selector: 'courses',
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
  public courses: Course[];
  private cachedCourses: Course[];

  constructor(
    private coursesService: CoursesService,
    private modalService: ModalService,
    private datePipe: DatePipe
  ) {}

  public ngOnInit() {
    this.coursesService.getCourses().then((courses) => {
      this.courses = this.prepareCourses(courses);
      this.cacheCourses();
    });
  }

  public filter(query: string): void {
    const properties = [ 'title', 'date' ];

    this.courses = query ? this.filterBy(properties, query) : this.cachedCourses;
  }

  public deleteCourse(id: number): void {
    this.courses.splice(this.courses.findIndex((course) => course.id === id), 1);
    this.coursesService.deleteCourse(id);
  }

  public openDeleteModal(id: number): void {
    this.modalService.open({
      content: `Delete course ${ id }?`,
      submitButtonText: 'Yes',
      cancelButtonText: 'No',
      onSubmit: this.deleteCourse.bind(this, id)
    });
  }

  private prepareCourses(courses) {
    return courses.map((course: Course) => {
      const preparedCourse = Object.assign({}, course);

      preparedCourse.date = this.datePipe.transform(course.date, 'dd-MM-yyyy');
      return preparedCourse;
    });
  }

  private filterBy(properties: string[], query: string): Course[] {
    return this.courses.filter((course: Course) => {
      return properties.some((property) => course[property].search(query) > -1);
    });
  }

  private cacheCourses(): void {
    this.cachedCourses = this.courses;
  }
}
