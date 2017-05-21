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
  private authorsList: string[];
  public authors: Array<{name: string, checked: boolean}>;

  private propagateChange = (_: any) => {};
  private onTouchedCallback = () => {};

  public onChange() {
    this.propagateChange(this.selectedAuthors);
    this.onTouchedCallback();
  }

  public writeValue(authors: string[]) {
    if (authors) {
      this.authorsList = authors;
      this.authors = authors.map((author) => ({ name: author, checked: false }));
      this.propagateChange(this.selectedAuthors);
    }
  }

  get selectedAuthors() {
    return this.authors
               .filter((author) => author.checked)
               .map((author) => author.name);
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
