import { Component } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'course-authors',
  styleUrls: [ './course-authors.scss' ],
  templateUrl: './course-authors.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CourseAuthorsComponent,
    multi: true
  }]
})

export class CourseAuthorsComponent implements ControlValueAccessor {
  private authorsList: string[] = [ 'Andrew Smith', 'John Doe', 'Jane Doe' ];
  public authors: Array<{name: string, selected: boolean}>;

  private propagateChange = (_: any) => {};
  private onTouchedCallback = () => {};

  public onChange() {
    this.propagateChange(this.selectedAuthors);
    this.onTouchedCallback();
  }

  public writeValue(authors: string[]) {
    if (authors) {
      this.authors = this.authorsList.map((author) => {
        return {
          name: author,
          selected: authors.some((name) => name === author)
        }
      });
      this.propagateChange(this.selectedAuthors);
    }
  }

  get selectedAuthors() {
    return this.authors
               .filter((author) => author.selected)
               .map((author) => author.name);
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
