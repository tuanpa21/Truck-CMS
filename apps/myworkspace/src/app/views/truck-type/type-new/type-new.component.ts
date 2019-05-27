import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TypeTruck } from '../../../mock/mock-data';
import { FORM_TRUCK_TYPE } from '../config/truck-type-config';

@Component({
  selector: 'myworkspace-type-new',
  templateUrl: './type-new.component.html',
  styleUrls: ['./type-new.component.scss']
})
export class TypeNewComponent implements OnInit {

  formConfig: FormConfig[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK_TYPE;
  }

  submitted(event) {
    event.id = TypeTruck.list[TypeTruck.list.length - 1].id + 1;
    TypeTruck.list.push(event);
    alert('Add Truck Type Success');
    
    this.router.navigate(['../index'], { relativeTo: this.route });
  }
}
