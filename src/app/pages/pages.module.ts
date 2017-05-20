import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoursesComponent } from './courses';
import { CoursesControlsComponent } from './courses/courses-controls';
import { CourseComponent } from './courses/course';
import { CourseDetailedComponent } from './course-detailed';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { NewCourseComponent } from './new-course';
import { CourseDateComponent } from './new-course/course-date';
import { CourseDurationComponent } from './new-course/course-duration';
import { MaxLengthValidatorDirective } from './new-course/max-length-validator.directive';
import {
  CreationDateHighlightDirective
} from './courses/course/creation-date-highlight.directive';
import { OrderByDatePipe } from './courses/order-by-date.pipe';

import { ComponentsModule } from '../components';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesControlsComponent,
    CourseComponent,
    CourseDetailedComponent,
    NoContentComponent,
    LoginComponent,
    NewCourseComponent,
    CourseDateComponent,
    CourseDurationComponent,
    MaxLengthValidatorDirective,
    CreationDateHighlightDirective,
    OrderByDatePipe
  ],
  providers: [
    DatePipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule {}
