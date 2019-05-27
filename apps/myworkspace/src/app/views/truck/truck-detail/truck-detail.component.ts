import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { HelperService } from '../../../core/services/helper.service';
import { Cargo, Drivers, Trucks, TruckStatus, TypeTruck } from '../../../mock/mock-data';
import { TRUCK_CONFIG } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-detail',
  templateUrl: './truck-detail.component.html',
  styleUrls: ['./truck-detail.component.scss']
})
export class TruckDetailComponent implements OnInit, OnDestroy {
  truckDetail$: Observable<Truck>;
  detailInfo: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.detailInfo = TRUCK_CONFIG;
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(param => {
      if (param.id) {
        const detail = Trucks.list.find(it => it.id == param.id);
        this.truckDetail$ = of(detail).pipe(map(item => {
            return {
              ...item,
              cargoTypeName: this.helper.getValueFromId(item.cargoTypeId, Cargo.list),
              statusName: this.helper.getValueFromId(item.statusId, TruckStatus.list),
              truckTypeName: this.helper.getValueFromId(item.truckTypeId, TypeTruck.list),
              driverName: this.helper.getValueFromId(item.driverId, Drivers.list),
              dimension: `${item.dimensionLong}-${item.dimensionHeight}-${item.dimensionWidth}`
            }
        }));
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  editTruck(event) {
    this.router.navigate(['../../', 'edit', event.id], { relativeTo: this.route });
  }

  deleteTruck(event) {
    const r = confirm('Are you sure?');
    const index = Trucks.list.findIndex(it => it.id == event.id);
    if (r) {
      Trucks.list.splice(
        index,
        1
      );
      alert('Delete Truck Success');
      this.router.navigate(['../../index'], { relativeTo: this.route });
    }
    
  }
}
