import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesService } from './courses.service';
import { ModalComponent } from './modal';
import { ModalService } from './modal/modal.service';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  providers: [
    CoursesService,
    ModalService,
    AuthorizationService
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
