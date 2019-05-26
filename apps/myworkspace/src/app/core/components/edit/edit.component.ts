import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { touchAllInput, VALIDATE_MSG } from '../../ultilities/form';

@Component({
  selector: 'myworkspace-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  _formConfig: FormConfig[];
  @Input() 
  set formConfig(config: FormConfig[]) {
    config.map(c => {
      if (!c.validator) {
        c.validator = [];
      }
      if (!c.hasOwnProperty('value')) {
        c.value = ''
      }
      if (!c.hasOwnProperty('type')) {
        c.type = 'text'
      }
    });
    this._formConfig = config;
    this.form = new FormGroup({});
    for (const c of config) {
      this.form.addControl(c.controlName, new FormControl(c.value, c.validator));
    }
  }
  get formConfig() {
    return this._formConfig;
  }

  @Input()
  set formData(data) {
    this.form.patchValue(data);
  }

  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {

  }

  submit() {
    touchAllInput(this.form);
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

  isError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  getErrorMsg(control: AbstractControl) {
    const error = Object.keys(control.errors)[0];
    if (!error) {
      return;
    }
    return VALIDATE_MSG[error];
  }
}

export interface FormConfig {
  label: string;
  controlName: string;
  validator?: ValidatorFn[];
  value?: any;
  type?: string;
  options?: Array<any>;
  maxLength?: number | string;
}

export const INPUT_TYPE = {
  TEXT: 'text',
  AUTOCOMPLETE: 'autocomplete',
  NUMBER: 'number'
}
