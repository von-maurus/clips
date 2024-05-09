import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegisterValidators {
  /** Static method to validate if the password and confirm password fields match */
  static match(ctrlName: string, matchCtrl: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(ctrlName);
      const matchingControl = group.get(matchCtrl);

      if (!control || !matchingControl) {
        console.error('Form controls cannot be found.');
        return { controlNotFound: false };
      }

      const error = control.value === matchingControl.value ? null : { noMatch: true };

      matchingControl.setErrors(error);
      return error;
    }
  }
}
