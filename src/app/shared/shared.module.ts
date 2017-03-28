import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CoursesService } from './courses.service';
import { ConfirmationModalComponent } from './confirmation-modal';
import { ConfirmationModalService } from './confirmation-modal/confirmation-modal.service';
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    ConfirmationModalComponent
  ],
  exports: [
    ConfirmationModalComponent
  ],
  providers: [
    CoursesService,
    ConfirmationModalService,
    AuthorizationService
  ],
  imports: [
    CommonModule,
    ModalModule
  ]
})
export class SharedModule {}
