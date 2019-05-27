import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TruckStatus } from '../../../mock/mock-data';
import { FORM_TRUCK_STATUS } from '../config/truck-status-config';

@Component({
  selector: 'myworkspace-status-new',
  templateUrl: './status-new.component.html',
  styleUrls: ['./status-new.component.scss']
})
export class StatusNewComponent implements OnInit {

  formConfig: FormConfig[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK_STATUS;
  }

  submitted(event) {
    event.id = TruckStatus.list[TruckStatus.list.length - 1].id + 1;
    TruckStatus.list.push(event);
    alert('Add Truck Status Success');
    
    this.router.navigate(['../index'], { relativeTo: this.route });
  }
}
