import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { Drivers } from '../../../mock/mock-data';
import { FORM_DRIVER } from '../config/driver-config';

@Component({
  selector: 'myworkspace-driver-new',
  templateUrl: './driver-new.component.html',
  styleUrls: ['./driver-new.component.scss']
})
export class DriverNewComponent implements OnInit {

  formConfig: FormConfig[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_DRIVER;
  }

  submitted(event) {
    event.id = Drivers.list[Drivers.list.length - 1].id + 1;
    Drivers.list.push(event);
    alert('Add  Success');
    
    this.router.navigate(['../index'], { relativeTo: this.route });
  }
}
