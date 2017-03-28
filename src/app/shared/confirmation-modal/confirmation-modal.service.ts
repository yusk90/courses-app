import { Injectable } from '@angular/core';

interface ModalFields {
  content: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  onSubmit?: Function;
  onClose?: Function;
}

@Injectable()
export class ConfirmationModalService {
  public modal;
  public data: ModalFields = {
    content: '',
    submitButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    onSubmit: Function.prototype,
    onClose: Function.prototype
  };

  public open(data: ModalFields): void {
    Object.assign(this.data, data);
    this.modal.show();
  }

  public close(): void {
    this.data.onClose();
    this.modal.hide();
  }

  public submit(): void {
    this.data.onSubmit();
    this.modal.hide();
  }
}
