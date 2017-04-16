import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'course-duration',
  styleUrls: [ './course-duration.scss' ],
  templateUrl: './course-duration.html'
})

export class CourseDurationComponent {
  @Input()
  public inputId: string;
  @Input()
  public duration: number;
  @Output()
  public durationChange: EventEmitter<any> = new EventEmitter();
}
