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

import { Store } from '@ngrx/store';
import { ADD_COURSE, DELETE_COURSE, EDIT_COURSE } from './courses-reducer';
import { Observable } from 'rxjs/Observable';

// interface AppState {
//   courses: Array<any>;
// }

@Component({
  selector: 'courses',
  styleUrls: [ './courses.scss' ],
  templateUrl: './courses.html'
})

export class CoursesComponent implements OnInit {
  public courses: Observable<number>;
  public coursesState;
  public courseIdForDelete: number;

  constructor(
    public coursesService: CoursesService,
    private confirmationModalService: ConfirmationModalService,
    private loaderBlockService: LoaderBlockService,
    private datePipe: DatePipe,
    private store: Store<any>
  ) {}

  public ngOnInit() {
    this.courses = this.store.select('courses');
    this.coursesService.getCourses2();

    this.coursesService.get();
    this.coursesState = this.coursesService.getState();
  }

  public deleteCourse(id: number): void {
    this.loaderBlockService.show();
    this.coursesService.deleteCourse(id)
      .then(this.onSuccessDelete.bind(this));
  }

  public deleteCourse2(id) {
    this.store.dispatch({ type: DELETE_COURSE, payload: id });
  }

  public addCourse(course) {
    this.store.dispatch({ type: ADD_COURSE, payload: course });
  }

  public openDeleteModal(courseId: number): void {
    this.confirmationModalService.open({
      content: 'Delete course?',
      submitButtonText: 'Yes',
      cancelButtonText: 'No',
      onSubmit: this.deleteCourse.bind(this, courseId)
    });
  }

  private onSuccessDelete(): void {
    this.loaderBlockService.hide();
    this.coursesService.get();
  }
}
  // // addCourse(course) {
  // //   this.store.dispatch({ type: ADD_COURSE, payload: course });
  // // }

  // editCourse(course) {
  //   this.store.dispatch({ type: EDIT_COURSE, payload: course });
  // }
