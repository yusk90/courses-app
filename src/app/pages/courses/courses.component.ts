import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Course } from '../../shared/course-interface';
import { CoursesService } from '../../shared/courses.service';
import {
  ConfirmationModalService
} from '../../shared/confirmation-modal/confirmation-modal.service';
import {
  LoaderBlockService
} from '../../shared/loader-block/loader-block.service';

@Component({
  selector: 'courses',
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
  public courses: Course[];
  public courseIdForDelete: number;
  private cachedCourses: Course[];

  constructor(
    private coursesService: CoursesService,
    private confirmationModalService: ConfirmationModalService,
    private loaderBlockService: LoaderBlockService,
    private datePipe: DatePipe
  ) {}

  public ngOnInit() {
    this.coursesService.getCourses().then((courses) => {
      this.courses = this.prepareCourses(courses);
      this.cacheCourses();
    });
  }

  public filter(query: string): void {
    const properties = [ 'title', 'displayDate' ];

    this.courses = query ? this.filterBy(properties, query) : this.cachedCourses;
  }

  public deleteCourse(id: number): void {
    this.loaderBlockService.show();
    this.coursesService.deleteCourse(id)
      .then(() => {
        this.loaderBlockService.hide();
        this.courses.splice(this.courses.findIndex((course) => course.id === id), 1);
      });
  }

  public openDeleteModal(courseId: number): void {
    this.confirmationModalService.open({
      content: 'Delete course?',
      submitButtonText: 'Yes',
      cancelButtonText: 'No',
      onSubmit: this.deleteCourse.bind(this, courseId)
    });
  }

  private prepareCourses(courses) {
    return courses.map((course: Course) => {
      const preparedCourse = Object.assign({}, course);

      preparedCourse.displayDate = this.datePipe.transform(course.date, 'dd-MM-yyyy');
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
