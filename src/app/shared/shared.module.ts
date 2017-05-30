import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ng2-bootstrap/modal';

import { CoursesService } from './courses.service';
import { CoursesFilterService } from './courses-filter.service';
import { ConfirmationModalComponent } from './confirmation-modal';
import { LoaderBlockComponent } from './loader-block';
import { ConfirmationModalService } from './confirmation-modal/confirmation-modal.service';
import { LoaderBlockService } from './loader-block/loader-block.service';
import { AuthorizationService } from './authorization.service';
import { AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { CourseDurationPipe } from './course-duration.pipe';

@NgModule({
  declarations: [
    ConfirmationModalComponent,
    LoaderBlockComponent,
    CourseDurationPipe
  ],
  exports: [
    ConfirmationModalComponent,
    LoaderBlockComponent,
    CourseDurationPipe
  ],
  providers: [
    CoursesService,
    CoursesFilterService,
    ConfirmationModalService,
    LoaderBlockService,
    AuthorizationService,
    AuthGuard,
    UserService
  ],
  imports: [
    CommonModule,
    ModalModule
  ]
})
export class SharedModule {}
