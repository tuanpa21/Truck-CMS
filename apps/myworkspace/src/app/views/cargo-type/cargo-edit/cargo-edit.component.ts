import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoType } from '@myworkspace/api-interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { Cargo } from '../../../mock/mock-data';
import { FORM_CARGO_TYPE } from '../config/cargo-type-config';

@Component({
  selector: 'myworkspace-cargo-edit',
  templateUrl: './cargo-edit.component.html',
  styleUrls: ['./cargo-edit.component.scss']
})
export class CargoEditComponent implements OnInit {
  cargo: CargoType;
  formConfig: FormConfig[];

  currentIndex: number | string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_CARGO_TYPE;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      this.currentIndex = Cargo.list.findIndex(it => it.id == param.id);
      this.cargo = Cargo.list[this.currentIndex];
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submitted(event) {
    // Call API update
    Cargo.list[this.currentIndex] = event;
    alert('Edit Cargo Type success');
    this.router.navigate(['../../index'], { relativeTo: this.route });
  }
}
