import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Course } from '../../../shared/course-interface';

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
