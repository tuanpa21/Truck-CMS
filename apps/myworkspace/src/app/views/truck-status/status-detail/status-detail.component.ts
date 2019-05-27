import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '@myworkspace/api-interface';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { TruckStatus } from '../../../mock/mock-data';
import { TRUCK_STATUS_CONFIG } from '../config/truck-status-config';

@Component({
  selector: 'myworkspace-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})
export class StatusDetailComponent implements OnInit, OnDestroy {
  truckStatus$: Observable<Status>;
  detailInfo: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.detailInfo = TRUCK_STATUS_CONFIG;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      if (param.id) {
        const detail = TruckStatus.list.find(it => it.id == param.id);
        this.truckStatus$ = of(detail).pipe(map(item => {
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

  editTruckStatus(event) {
    this.router.navigate(['../../', 'edit', event.id], { relativeTo: this.route });
  }

  deleteTruckStatus(event) {
    const r = confirm('Are you sure?');
    const index = TruckStatus.list.findIndex(it => it.id == event.id);
    if (r) {
      TruckStatus.list.splice(
        index,
        1
      );
      alert('Delete Truck Status Success');
      this.router.navigate(['../../index'], { relativeTo: this.route });
    }
    
  }
}
