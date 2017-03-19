import { Component } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'modal',
  styleUrls: [ './modal.scss' ],
  templateUrl: './modal.html'
})

export class ModalComponent {
  constructor(public modalService: ModalService) {}
}
