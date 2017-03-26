import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './courses.service';
import { AuthorizationService } from './authorization.service';

@NgModule({
  providers: [
    CoursesService,
    AuthorizationService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
