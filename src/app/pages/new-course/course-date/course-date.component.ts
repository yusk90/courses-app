import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'course-date',
  styleUrls: [ './course-date.scss' ],
  templateUrl: './course-date.html'
})

export class CourseDateComponent implements OnChanges {
  @Input()
  public inputId: string;
  @Input()
  public date: string;
  @Output()
  public dateChange: EventEmitter<any> = new EventEmitter();

  public updateDate(date): void {
    this.dateChange.emit(new Date(date).toISOString());
  }

  public ngOnChanges(changes) {
    this.date = this.prepareDate(changes.date.currentValue);
  }

  private prepareDate(isoDate: string): string {
    return isoDate.slice(0, 10);
  }
}
