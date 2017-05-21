import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { Course } from '../../../shared/course-interface';

@Component({
  selector: 'course-item',
  styleUrls: [ './course-item.scss' ],
  templateUrl: './course-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseItemComponent {
  @Input()
  public course: Course;
  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter();

  public delete(id) {
    this.onDelete.emit(id);
  }
}
