import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // - at least 8 characters
  // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
  // - Can contain special characters
  private pwdRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(120)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.pwdRegEx)]),
    confirmPass: new FormControl('', [Validators.required,]),
    phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(14)]),
  });

  public showAlert: boolean = false;
  public alertColor = 'blue';
  public alertMsg = 'Please wait! Your account is been created.';

  public get invalidForm(): boolean {
    return this.registerForm.invalid;
  }

  public get nameErrorMsg(): string {
    const isDirty = this.registerForm.controls.name.dirty && this.registerForm.controls.name.touched;
    const trimmedValue = this.registerForm.controls.name.value?.trim();
    if (isDirty) {
      if (this.registerForm.controls.name.errors?.required || !trimmedValue) return 'This is a required field.';
      if (this.registerForm.controls.name.errors?.minlength) return 'Please, enter a valid name.';
    }
    return '';
  }

  public get emailErrorMsg(): string {
    const isDirty = this.registerForm.controls.email.dirty && this.registerForm.controls.email.touched;
    if (isDirty) {
      if (this.registerForm.controls.email.errors?.required) return 'This is a required field.';
      if (this.registerForm.controls.email.errors?.email) return 'Enter a valid email.';
    }
    return '';
  }
  public get ageErrorMsg(): string {
    const isDirty = this.registerForm.controls.age.dirty && this.registerForm.controls.age.touched;
    if (isDirty) {
      if (this.registerForm.controls.age.errors?.required) return 'This is a required field.';
      if (this.registerForm.controls.age.errors?.min || this.registerForm.controls.age.errors?.max) return 'Please enter a valid age.';
    }
    return '';
  }
  public get passwordErrorMsg(): string {
    const isDirty = this.registerForm.controls.password.dirty && this.registerForm.controls.password.touched;
    if (isDirty) {
      if (this.registerForm.controls.password.errors?.required) return 'This is a required field.';
      if (this.registerForm.controls.password.errors?.pattern) return 'Password must contain at least 8 characters, have 1 upper case letter, 1 lower case letter and 1 number.';
    }
    return '';
  }
  public get confirmPassErrorMsg(): string {
    const isDirty = this.registerForm.controls.confirmPass.dirty && this.registerForm.controls.confirmPass.touched;
    if (isDirty) {
      if (this.registerForm.controls.confirmPass.errors?.required) return 'This is a required field.';
    }
    return '';
  }
  public get phoneErrorMsg(): string {
    const isDirty = this.registerForm.controls.phone.dirty && this.registerForm.controls.phone.touched;
    if (isDirty) {
      if (this.registerForm.controls.phone.errors?.required) return 'This is a required field.';
      if (this.registerForm.controls.phone.errors?.minlength || this.registerForm.controls.phone.errors?.maxlength) return 'Enter a valid phone number, consider your corresponding country code.';
    }
    return '';
  }

  confirmPasswordValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value || '';
    const confirmPassword = formGroup.get('confirmPass')?.value || '';

    return password === confirmPassword ? null : { notMatched: true };
  }

  onRegister() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait! Your account is been created.';
  }
}
