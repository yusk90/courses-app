import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CoursesService } from './courses.service';
import { ConfirmationModalComponent } from './confirmation-modal';
import { LoaderBlockComponent } from './loader-block';
import { ConfirmationModalService } from './confirmation-modal/confirmation-modal.service';
import { LoaderBlockService } from './loader-block/loader-block.service';
import { AuthorizationService } from './authorization.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    ConfirmationModalComponent,
    LoaderBlockComponent
  ],
  exports: [
    ConfirmationModalComponent,
    LoaderBlockComponent
  ],
  providers: [
    CoursesService,
    ConfirmationModalService,
    LoaderBlockService,
    AuthorizationService,
    AuthGuard
  ],
  imports: [
    CommonModule,
    ModalModule
  ]
})
export class SharedModule {}
