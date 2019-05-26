import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'myworkspace-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss']
})
export class InputAutocompleteComponent implements OnInit {
  control: FormControl;
  _options = [];
  set options(options) {
    this._options = options;
    this.optionsList = options.map(it => `${it.name}`);
  }
  get options() {
    return this._options;
  }
  optionsList = [];
  autoCtrl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event) {
    const result = event.target.value;
    if (this.optionsList.indexOf(result) < 0) {
      this.autoCtrl.setValue('');
      return;
    }
    this.control.setValue(this.options.find(it => it.name == this.autoCtrl.value).id);
  }

  onBlur() {
    if (!this.control.value) {
      this.autoCtrl.setValue('');
    }
  }
}
