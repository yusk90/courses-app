import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[maximumLength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaxLengthValidatorDirective,
    multi: true
  }]
})

export class MaxLengthValidatorDirective implements Validator {
  @Input()
  public maximumLength: number;

  public validate(control: AbstractControl) {
    if (control.value && control.value.length > this.maximumLength) {
      return {
        maximumLength: {
          maxLength: this.maximumLength,
          actualLength: control.value.length
        }
      };
    }

    return null;
  }
}
