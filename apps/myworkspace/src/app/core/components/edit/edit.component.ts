import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { HelperService } from '../../services/helper.service';

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

    if (this.formData) {
      this.form.patchValue(this.formData);
    }
  }
  get formConfig() {
    return this._formConfig;
  }

  _formData;
  @Input()
  set formData(data: any) {
    if (data) {
      this.form.patchValue(data);
    }
    this._formData = data;
  }
  get formData() {
    return this._formData;
  }

  @Output() save = new EventEmitter<any>();

  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public helper: HelperService
    ) {
  }

  ngOnInit() {
  }

  submit() {
    this.helper.touchAllInput(this.form);
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

  isError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
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
