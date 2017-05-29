import { AbstractControl } from '@angular/forms';

export const numberOfChildrenValidator = (control: AbstractControl): { [key: string]: boolean } => {
  const familySituationId = control.get('familySituationId').value;
  const numberOfChildren = control.get('numberOfChildren').value;
  if (Number(familySituationId) === 3) {
    if (Number(numberOfChildren) === 0) {
      return { wrongNumberOfChildren: true };
    }
  }
  return null;
};