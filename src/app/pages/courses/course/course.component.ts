import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Course } from './course';

@Component({
  selector: 'course',
  styleUrls: [ './course.scss' ],
  templateUrl: './course.html'
})

export class CourseComponent {
  @Input()
  public course: Course;
  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter();

  public delete(id) {
    this.onDelete.emit(id);
  }
}
