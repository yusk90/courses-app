import { Injectable } from '@angular/core';

interface ModalFields {
  content: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  onSubmit?: Function;
  onClose?: Function;
}

@Injectable()
export class ModalService {
  public data: ModalFields = {
    content: '',
    submitButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    onSubmit: () => {},
    onClose: () => {}
  };
  public opened: boolean = false;

  public close(): void {
    this.data.onClose();
    this.opened = false;
  }

  public open(data: ModalFields): void {
    Object.assign(this.data, data);
    this.opened = true;
  }

  public submit(): void {
    this.data.onSubmit();
    this.close();
  }
}
