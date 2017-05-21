import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[creationDateHighlight]'
})

export class CreationDateHighlightDirective implements OnInit {
  @Input('creationDateHighlight')
  private courseCreationDate: string;

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    this.highlightCourse();
  }

  private highlightCourse(): void {
    const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
    const borderColors = {
      latest: '#2ed800',
      upcoming: '#00bcff'
    };
    const currentDate = Date.now();
    const createdDate = new Date(this.courseCreationDate).getTime();
    const latestPeriod = 14 * MILLISECONDS_IN_DAY;

    if (createdDate < currentDate && createdDate >= currentDate - latestPeriod) {
      this.paintBorder(borderColors.latest);
    }
    if (createdDate > currentDate) {
      this.paintBorder(borderColors.upcoming);
    }
  }

  private paintBorder(color: string): void {
    this.el.nativeElement.style.borderColor = color;
  }
}
