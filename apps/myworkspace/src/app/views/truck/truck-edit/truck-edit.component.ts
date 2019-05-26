import { Component, OnInit } from '@angular/core';
import { Truck } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { MOCK_TRUCK } from '../../../core/mock-data/mock-truck';
import { FORM_TRUCK } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.scss']
})
export class TruckEditComponent implements OnInit {
  truck$: Observable<Truck>;
  formConfig: FormConfig[];
  constructor() { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK;
    this.truck$ = of(MOCK_TRUCK[0]);
  }

  submitted(event) {
    // Call API update
  }
}

