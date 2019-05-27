import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '@myworkspace/api-interface';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Drivers } from '../../../mock/mock-data';
import { DRIVER_CONFIG } from '../config/driver-config';

@Component({
  selector: 'myworkspace-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit, OnDestroy {
  driver$: Observable<Driver>;
  detailInfo: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.detailInfo = DRIVER_CONFIG;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      if (param.id) {
        const detail = Drivers.list.find(it => it.id == param.id);
        this.driver$ = of(detail).pipe(map(item => {
            return {
              ...item,
              createdDate: (new Date()).toDateString()
            }
        }));
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  editDriver(event) {
    this.router.navigate(['../../', 'edit', event.id], { relativeTo: this.route });
  }

  deleteDriver(event) {
    const r = confirm('Are you sure?');
    const index = Drivers.list.findIndex(it => it.id == event.id);
    if (r) {
      Drivers.list.splice(
        index,
        1
      );
      alert('Delete Driver Success');
      this.router.navigate(['../../index'], { relativeTo: this.route });
    }
    
  }
}
 