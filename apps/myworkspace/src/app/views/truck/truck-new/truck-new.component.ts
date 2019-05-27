import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { Trucks } from '../../../mock/mock-data';
import { FORM_TRUCK } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-new',
  templateUrl: './truck-new.component.html',
  styleUrls: ['./truck-new.component.scss']
})
export class TruckNewComponent implements OnInit {

  formConfig: FormConfig[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK;
  }

  submitted(event) {
    event.id = Trucks.list[Trucks.list.length - 1].id + 1;
    Trucks.list.push(event);
    alert('Add Truck Success');
    
    this.router.navigate(['../index'], { relativeTo: this.route });
    // Call API update
  }
}
