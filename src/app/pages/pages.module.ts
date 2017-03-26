import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CoursesComponent } from './courses';
import { CoursesControlsComponent } from './courses/courses-controls';
import { CourseComponent } from './courses/course';
import { CourseDetailedComponent } from './course-detailed';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { CourseDurationPipe } from './courses/course/course-duration.pipe';

import { ComponentsModule } from '../components';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesControlsComponent,
    CourseComponent,
    CourseDetailedComponent,
    NoContentComponent,
    LoginComponent,
    CourseDurationPipe
  ],
  providers: [
    DatePipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    ModalModule
  ]
})
export class PagesModule {}
