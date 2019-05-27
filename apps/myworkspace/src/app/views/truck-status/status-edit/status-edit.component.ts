import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '@myworkspace/api-interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TruckStatus } from '../../../mock/mock-data';
import { FORM_TRUCK_STATUS } from '../config/truck-status-config';

@Component({
  selector: 'myworkspace-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.scss']
})
export class StatusEditComponent implements OnInit, OnDestroy {
  truckStatus: Status;
  formConfig: FormConfig[];

  currentIndex: number | string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK_STATUS;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      this.currentIndex = TruckStatus.list.findIndex(it => it.id == param.id);
      this.truckStatus = TruckStatus.list[this.currentIndex];
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submitted(event) {
    // Call API update
    TruckStatus.list[this.currentIndex] = event;
    alert('Edit Truck Status success');
    this.router.navigate(['../../index'], { relativeTo: this.route });
  }
}
