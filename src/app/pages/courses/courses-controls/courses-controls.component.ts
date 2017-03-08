import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'courses-controls',
  providers: [],
  styleUrls: [ './courses-controls.scss' ],
  templateUrl: './courses-controls.html'
})

export class CoursesControlsComponent {
  @Output()
  public onFilter: EventEmitter<any> = new EventEmitter();

  public filterQuery: string = '';

  public filter(query) {
    this.onFilter.emit(query);
  }
}
