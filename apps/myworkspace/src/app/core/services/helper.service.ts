import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  VALIDATE_MSG = {
    required: 'This field is required',
    maxlength: 'This field is too long',
  };
  constructor() { }
  
  isError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  touchAllInput(form: AbstractControl | FormControl | FormGroup | FormArray, loop: boolean = false) {
    if (form instanceof FormControl) {
      form.markAsDirty({onlySelf: true});
      form.markAsTouched({onlySelf: true});
    }
    if (form instanceof FormGroup) {
      Object.keys(form.controls).forEach(key => {
        const control = form.get(key);
        if (control instanceof FormControl) {
          this.touchAllInput(control, loop);
        }
        if (control instanceof FormArray && loop) {
          const controlArray = control as FormArray;
          for (const controlGroup of controlArray.controls) {
            this.touchAllInput(controlGroup, loop);
          }
        }
        if (control instanceof FormGroup && loop) {
          this.touchAllInput(control, loop);
        }
      });
    }
    if (form instanceof FormArray) {
      for (const controlGroup of form.controls) {
        this.touchAllInput(controlGroup, loop);
      }
    }
  }

  getErrorMsg(control: AbstractControl) {
    const error = Object.keys(control.errors)[0];
    if (!error) {
      return;
    }
    return this.VALIDATE_MSG[error];
  }

  getValueFromId(value, array): string {
    return array.find(it => it.id === value).name;
  }
}
