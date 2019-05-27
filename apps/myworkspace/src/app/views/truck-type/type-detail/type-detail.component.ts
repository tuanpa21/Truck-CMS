import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TruckType } from '@myworkspace/api-interface';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { TypeTruck } from '../../../mock/mock-data';
import { TRUCK_TYPE_CONFIG } from '../config/truck-type-config';

@Component({
  selector: 'myworkspace-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss']
})
export class TypeDetailComponent implements OnInit, OnDestroy {
  typeDetail$: Observable<TruckType>;
  detailInfo: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.detailInfo = TRUCK_TYPE_CONFIG;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      if (param.id) {
        const detail = TypeTruck.list.find(it => it.id == param.id);
        this.typeDetail$ = of(detail).pipe(map(item => {
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

  editTruckType(event) {
    this.router.navigate(['../../', 'edit', event.id], { relativeTo: this.route });
  }

  deleteTruckType(event) {
    const r = confirm('Are you sure?');
    const index = TypeTruck.list.findIndex(it => it.id == event.id);
    if (r) {
      TypeTruck.list.splice(
        index,
        1
      );
      alert('Delete Truck Type Success');
      this.router.navigate(['../../index'], { relativeTo: this.route });
    }
    
  }
}
