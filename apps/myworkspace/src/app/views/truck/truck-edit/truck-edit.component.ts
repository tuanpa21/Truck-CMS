import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { Trucks } from '../../../mock/mock-data';
import { FORM_TRUCK } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.scss']
})
export class TruckEditComponent implements OnInit, OnDestroy {
  truck: Truck;
  formConfig: FormConfig[];

  currentIndex: number | string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_TRUCK;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      this.currentIndex = Trucks.list.findIndex(it => it.id == param.id);
      this.truck = Trucks.list[this.currentIndex];
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submitted(event) {
    // Call API update
    Trucks.list[this.currentIndex] = event;
    alert('Edit truck success');
    this.router.navigate(['../../index'], { relativeTo: this.route });
  }
}

