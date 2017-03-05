import { NgModule } from '@angular/core';

import {
  RouterModule
} from '@angular/router';

import { CoursesComponent } from './courses';
import { CourseComponent } from './courses/course';
import { CourseDetailedComponent } from './course-detailed';
import { NoContentComponent } from './no-content';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseDetailedComponent,
    NoContentComponent
  ],
  exports: [
    CoursesComponent,
    CourseComponent,
    CourseDetailedComponent,
    NoContentComponent
  ],
  imports: [ RouterModule ]
})
export class PagesModule {}
