import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function forbiddenValueValidator(nameRe: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const name = +control.value;
    const no = nameRe === name;
    return no ? {'forbiddenValue': {name}} : null;
  };
}

@Directive({
  selector: '[yucForbiddenValidatorDirective]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator, OnChanges{

  @Input() forbiddenName: string;
  private valFn = Validators.nullValidator;

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['forbiddenValue'];
    if (change) {
      debugger;
      const val: number = change.currentValue;
      const re = val ;
      this.valFn = forbiddenValueValidator(re);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }

}
