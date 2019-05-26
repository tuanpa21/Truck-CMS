import { Component, OnInit } from '@angular/core';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { FORM_TRUCK } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-new',
  templateUrl: './truck-new.component.html',
  styleUrls: ['./truck-new.component.scss']
})
export class TruckNewComponent implements OnInit {

  formConfig: FormConfig[];
  constructor() { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK;
  }

  submitted(event) {
    // Call API update
  }
}
