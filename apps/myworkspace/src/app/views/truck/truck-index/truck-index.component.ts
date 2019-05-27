import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from '@myworkspace/api-interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { TableConfig } from '../../../core/components/list/list.component';
import { HelperService } from '../../../core/services/helper.service';
import { Cargo, Drivers, Trucks, TruckStatus, TypeTruck } from '../../../mock/mock-data';
import { TRUCK_CONFIG } from '../config/truck-config';

@Component({
  selector: 'myworkspace-truck-index',
  templateUrl: './truck-index.component.html',
  styleUrls: ['./truck-index.component.scss']
})
export class TruckIndexComponent implements OnInit {
  tableConfig: Array<TableConfig>;
  trucks$: Observable<Truck[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.tableConfig = TRUCK_CONFIG;
    this.getList()
  }

  detailTruck(event) {
    this.router.navigate(['../detail', event.id], { relativeTo: this.route });
  }

  deleteTruck(event) {
    const r = confirm('Are you sure?');
    if (r) {
      const index = Trucks.list.findIndex(it => it.id == event.id);
      Trucks.list.splice(
        index,
        1
      );
      this.getList();
      alert('Delete Truck Success');
    }
    
  }
  
  editTruck(event) {
    this.router.navigate(['../edit', event.id], { relativeTo: this.route });
  }

  getList() {
    this.trucks$ = of(Trucks.list).pipe(map(list => {
      return list.map(item => {
        return {
          ...item,
          cargoTypeName: this.helper.getValueFromId(item.cargoTypeId, Cargo.list),
          statusName: this.helper.getValueFromId(item.statusId, TruckStatus.list),
          truckTypeName: this.helper.getValueFromId(item.truckTypeId, TypeTruck.list),
          driverName: this.helper.getValueFromId(item.driverId, Drivers.list),
          dimension: `${item.dimensionLong}-${item.dimensionHeight}-${item.dimensionWidth}`
        }
      })
    }));
  }
}
