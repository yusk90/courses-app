import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

import { CoursesComponent } from './courses';
import { CoursesControlsComponent } from './courses/courses-controls';
import { CourseComponent } from './courses/course';
import { CourseDetailedComponent } from './course-detailed';
import { NoContentComponent } from './no-content';
import { CourseDurationPipe } from './courses/course/course-duration.pipe';

import { ComponentsModule } from '../components';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesControlsComponent,
    CourseComponent,
    CourseDetailedComponent,
    NoContentComponent,
    CourseDurationPipe
  ],
  exports: [
    CoursesComponent,
    CoursesControlsComponent,
    CourseComponent,
    CourseDetailedComponent,
    NoContentComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule {}
