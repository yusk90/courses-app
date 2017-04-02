import { Injectable } from '@angular/core';

@Injectable()
export class LoaderBlockService {
  public isShowing: boolean = false;

  public show(): void {
    this.isShowing = true;
  }

  public hide(): void {
    this.isShowing = false;
  }
}
