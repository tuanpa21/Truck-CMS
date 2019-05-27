import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { Cargo } from '../../../mock/mock-data';
import { FORM_CARGO_TYPE } from '../config/cargo-type-config';

@Component({
  selector: 'myworkspace-cargo-new',
  templateUrl: './cargo-new.component.html',
  styleUrls: ['./cargo-new.component.scss']
})
export class CargoNewComponent implements OnInit {

  formConfig: FormConfig[];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_CARGO_TYPE;
  }

  submitted(event) {
    event.id = Cargo.list[Cargo.list.length - 1].id + 1;
    Cargo.list.push(event);
    alert('Add Cargo Type Success');
    
    this.router.navigate(['../index'], { relativeTo: this.route });
  }
}
