import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ConfirmationModalService } from './confirmation-modal.service';

@Component({
  selector: 'confirmation-modal',
  styleUrls: [ './confirmation-modal.scss' ],
  templateUrl: './confirmation-modal.html'
})

export class ConfirmationModalComponent implements AfterViewInit {
  @ViewChild('modal')
  public modal;

  constructor(public confirmationModalService: ConfirmationModalService) {}

  public ngAfterViewInit() {
    this.confirmationModalService.modal = this.modal;
  }
}
