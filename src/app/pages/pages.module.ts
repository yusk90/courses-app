import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoursesComponent } from './courses';
import { CoursesControlsComponent } from './courses/courses-controls';
import { CourseItemComponent } from './courses/course-item';
import { CourseDetailedComponent } from './course-detailed';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { CourseComponent } from './course';
import { CourseDateComponent } from './course/course-date';
import { CourseDurationComponent } from './course/course-duration';
import { CourseAuthorsComponent } from './course/course-authors';
import { MaxLengthValidatorDirective } from './course/max-length-validator.directive';
import {
  CreationDateHighlightDirective
} from './courses/course-item/creation-date-highlight.directive';
import { OrderByDatePipe } from './courses/order-by-date.pipe';

import { ComponentsModule } from '../components';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesControlsComponent,
    CourseItemComponent,
    CourseDetailedComponent,
    NoContentComponent,
    LoginComponent,
    CourseComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent,
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
