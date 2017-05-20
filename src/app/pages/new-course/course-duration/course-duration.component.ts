import {
  Component,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'course-duration',
  styleUrls: [ './course-duration.scss' ],
  templateUrl: './course-duration.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CourseDurationComponent,
    multi: true
  }]
})

export class CourseDurationComponent implements ControlValueAccessor {
  @Input()
  public inputId: string;

  private innerValue: any = '';
  private propagateChange = (_: any) => {};
  private onTouchedCallback = () => {};

  get duration(): any {
    return this.innerValue;
  };

  set duration(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = (value !== null) ? value : '';
      this.propagateChange(this.innerValue);
    }
  }

  public writeValue(value: any) {
    this.duration = value;
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public onBlur() {
    this.onTouchedCallback();
  }
}
