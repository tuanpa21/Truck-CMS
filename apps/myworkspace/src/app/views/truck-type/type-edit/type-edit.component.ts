import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruckType } from '@myworkspace/api-interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { TypeTruck } from '../../../mock/mock-data';
import { FORM_TRUCK_TYPE } from '../config/truck-type-config';

@Component({
  selector: 'myworkspace-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.scss']
})
export class TypeEditComponent implements OnInit, OnDestroy {
  truck: TruckType;
  formConfig: FormConfig[];

  currentIndex: number | string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK_TYPE;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      this.currentIndex = TypeTruck.list.findIndex(it => it.id == param.id);
      this.truck = TypeTruck.list[this.currentIndex];
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submitted(event) {
    TypeTruck.list[this.currentIndex] = event;
    alert('Edit Truck Type success');
    this.router.navigate(['../../index'], { relativeTo: this.route });
  }
}
