import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '@myworkspace/api-interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormConfig } from '../../../core/components/edit/edit.component';
import { Drivers } from '../../../mock/mock-data';
import { FORM_DRIVER } from '../config/driver-config';

@Component({
  selector: 'myworkspace-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit, OnDestroy {
  driver: Driver;
  formConfig: FormConfig[];

  currentIndex: number | string;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formConfig = FORM_DRIVER;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      this.currentIndex = Drivers.list.findIndex(it => it.id == param.id);
      this.driver = Drivers.list[this.currentIndex];
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submitted(event) {
    // Call API update
    Drivers.list[this.currentIndex] = event;
    alert('Edit Driver success');
    this.router.navigate(['../../index'], { relativeTo: this.route });
  }
}
