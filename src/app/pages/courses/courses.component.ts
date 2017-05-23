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
  public coursesState;
  public courseIdForDelete: number;
  public orderDirections: string[] = [ 'asc', 'desc' ];

  constructor(
    public coursesService: CoursesService,
    private confirmationModalService: ConfirmationModalService,
    private loaderBlockService: LoaderBlockService,
    private datePipe: DatePipe
  ) {}

  public ngOnInit() {
    this.coursesService.getCourses();
    this.coursesState = this.coursesService.getState();
  }

  public deleteCourse(id: number): void {
    this.loaderBlockService.show();
    this.coursesService.deleteCourse(id)
      .then(() => {
        this.loaderBlockService.hide();
        this.coursesState.courses
          .splice(this.coursesState.courses.findIndex((course) => course.id === id), 1);
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
}
